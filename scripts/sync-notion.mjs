// Đồng bộ Notion -> notion-data.js (Node 18+, không cần cài thư viện)
// Nguồn: 125 chủ đề, Kho tri thức nội khoa, 4 CSDL của Thực hành lâm sàng 12 tháng.
// Biến môi trường: NOTION_TOKEN (bắt buộc), NOTION_DATA_OUT (tùy chọn, dùng khi kiểm thử)
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = process.env.NOTION_DATA_OUT || fileURLToPath(new URL("../notion-data.js", import.meta.url));

// Mỗi nguồn có: id data source (API mới) và id database (API cũ, dùng làm phương án dự phòng)
export const SOURCES = {
  mc:  { ds: "9735e6e2-16b4-45f4-9385-9b8d032334e9", db: "a72a4d77810c405a95f4a1be25b19958", required: true },
  kho: { ds: "8f799c39-abac-4559-b886-bf533973adfc", db: "82f7dbf39c5742809fb94147451cbf16" },
  rot: { ds: "1bca98ab-7cb8-4aac-9648-a0a623993a77", db: "1251aac91e9748f48d3b5ea84ed317f7" },
  top: { ds: "535fe6b8-b5ba-4c26-9069-591661cfa2e8", db: "adc07962146c4772933cdd5a05a301d0" },
  cas: { ds: "b0f0ab4c-fb0b-4377-98ca-c3013b949f06", db: "67ea9d8556814c17a0ca8da9b32ecabb" },
  dep: { ds: "ac6f5ebb-66e2-46de-bf17-350b9645c30a", db: "f6d9e3ad00644e739d82987fcbc2df6c" },
};

const CHAPTERS = {
  "Hệ Nội tiết": "NT", "Hệ Tiêu hóa": "TH", "Hệ Tim mạch": "TM", "Hệ Hô hấp": "HH",
  "Hệ Thận – Niệu": "TN", "Hệ Thần kinh": "TK", "Hệ Cơ xương khớp": "CX",
  "Hệ Máu – Lưới – Bạch huyết": "MA", "Hệ Miễn dịch": "MD", "Sản Phụ khoa": "SP",
  "Sức khỏe hành vi – Tâm thần": "TT", "Da và mô dưới da": "DA",
  "Rối loạn đa cơ quan & Khác": "DC", "Nhóm bổ sung (121-125 - cần đối chiếu)": "BS",
};
const CHN = Object.fromEntries(Object.entries(CHAPTERS).map(([k, v]) => [k.normalize("NFC"), v]));
export const CH_LABEL = {
  NT: "Nội tiết", TH: "Tiêu hóa", TM: "Tim mạch", HH: "Hô hấp", TN: "Thận – Niệu", TK: "Thần kinh",
  CX: "Cơ xương khớp", MA: "Máu – Bạch huyết", MD: "Miễn dịch", SP: "Sản phụ khoa",
  TT: "Tâm thần", DA: "Da", DC: "Đa cơ quan & Khác", BS: "Nhóm bổ sung",
};

// ---------- tiện ích đọc thuộc tính (chịu được khác biệt dấu tiếng Việt NFC/NFD) ----------
const nfc = (s) => String(s).normalize("NFC");
const plain = (arr) => (arr || []).map((t) => t.plain_text).join("").trim();
const pid = (page) => String(page.id || "").replace(/-/g, "").toLowerCase();
const le = (page) => (page.last_edited_time || "").slice(0, 10);
const day = (d) => (d?.start ? d.start.slice(0, 10) : "");

function props(page) {
  const m = new Map();
  for (const [k, v] of Object.entries(page.properties || {})) m.set(nfc(k), v);
  return {
    get: (name) => m.get(nfc(name)),
    title: (name) => plain((m.get(nfc(name)) ?? [...m.values()].find((v) => v?.type === "title"))?.title),
    text: (name) => plain(m.get(nfc(name))?.rich_text),
    sel: (name) => m.get(nfc(name))?.select?.name || "",
    num: (name) => m.get(nfc(name))?.number ?? 0,
    date: (name) => day(m.get(nfc(name))?.date),
    url: (name) => m.get(nfc(name))?.url || "",
    check: (name) => (m.get(nfc(name))?.checkbox ? 1 : 0),
  };
}
const hexId = (u) => (String(u).match(/[0-9a-f]{32}/i) || [""])[0].toLowerCase();
const stOf = (name) => {
  const s = nfc(name);
  if (/Đã học|Đã soạn xong/.test(s)) return 2;
  if (/Đang/.test(s)) return 1;
  return 0;
};

// ---------- chuyển từng loại trang thành một dòng dữ liệu ----------
export function rowMc(page) {
  const p = props(page), name = p.title("Ghi lại thắc mắc");
  if (!name) return null;
  return [name, CHN[nfc(p.sel("Chương"))] || "DC", nfc(p.sel("Loại")) === nfc("Ôn tập tổng hợp") ? "O" : "T",
    p.date("Ngày bắt đầu"), p.date("Ngày kết thúc"), hexId(p.url("Link bài học")), stOf(p.sel("Trạng thái")),
    p.num("Mức tự tin (1-5)"), p.num("Số lần đã ôn tập"), p.date("Ngày ôn gần nhất"), p.text("Ghi chú / Bẫy MCQ"), pid(page), le(page)];
}
export function rowKho(page) {
  const p = props(page), name = p.title("Chủ đề / Bệnh học");
  if (!name) return null;
  const nh = nfc(p.sel("Nhóm kiến thức")), pr = nfc(p.sel("Mức độ ưu tiên")), pl = nfc(p.sel("Phân loại bệnh lý"));
  return [name, CHN[nfc(p.sel("Hệ cơ quan"))] || "DC", /cơ sở/i.test(nh) ? 1 : /Bệnh lý/.test(nh) ? 2 : /Khuyến cáo/.test(nh) ? 3 : 0,
    stOf(p.sel("Trạng thái học tập")), /Core/.test(pr) ? 1 : /Nên biết/.test(pr) ? 2 : /Tham khảo/.test(pr) ? 3 : 0,
    p.num("Mức tự tin (1-5)"), /Cấp cứu/.test(pl) ? "E" : /Thông thường/.test(pl) ? "N" : "",
    le(page), pid(page), pid(page), le(page), p.url("URL")];
}
export function rowRot(page) {
  const p = props(page), name = p.title("Khoa");
  if (!name || !p.date("Ngày bắt đầu") || !p.date("Ngày kết thúc")) return null;
  return [name, p.date("Ngày bắt đầu"), p.date("Ngày kết thúc"), p.text("Thời lượng")];
}
export function rowTop(page) {
  const p = props(page), name = p.title("Chủ đề");
  if (!name) return null;
  return [name, p.sel("Khoa"), stOf(p.sel("Trạng thái")), p.sel("Mức ưu tiên"), p.text("Ghi chú"), pid(page), pid(page), le(page)];
}
export function rowCas(page) {
  const p = props(page), name = p.title("Tên ca / Mã ca");
  if (!name) return null;
  return [name, p.sel("Khoa"), stOf(p.sel("Trạng thái ghi chép")), p.text("Chẩn đoán chính"), p.date("Ngày gặp"), p.check("Case đáng đào sâu"), pid(page), pid(page), le(page)];
}
export function rowDep(page) {
  const p = props(page), name = p.title("Tên chuyên đề");
  if (!name) return null;
  return [name, p.sel("Khoa"), stOf(p.sel("Trạng thái")), p.text("Tuần học"), p.date("Ngày bắt đầu đào sâu"), pid(page), pid(page), le(page)];
}

// ---------- ghi ngày học xong thật ----------
// Notion không lưu ngày bạn bấm "Đã học xong". Script tự ghi: lần đầu thấy bài chuyển sang Đã học xong
// thì lấy ngày hôm đó (giờ Việt Nam); các lần sau giữ nguyên. Bài đã xong từ trước khi có ghi nhận
// thì dùng ngày chỉnh sửa lần cuối làm ước lượng.
const todayVN = () => new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10);
const SHAPE = {
  mc:  { st: 6, pid: 11, done: 12 },
  kho: { st: 3, pid: 9,  done: 10 },
  top: { st: 2, pid: 6,  done: 7 },
  cas: { st: 2, pid: 7,  done: 8 },
  dep: { st: 2, pid: 6,  done: 7 },
};
export function trackDone(rows, oldRows, shape, today = todayVN()) {
  const byPid = new Map(), byName = new Map();
  for (const r of oldRows || []) { if (r[shape.pid]) byPid.set(r[shape.pid], r); byName.set(r[0], r); }
  return rows.map((r) => {
    const le = r[shape.done] || "";
    const old = byPid.get(r[shape.pid]) || byName.get(r[0]);
    let done = "";
    if (r[shape.st] === 2) {
      if (old && old[shape.st] === 2) done = old[shape.done] || le;
      else if (old) done = today;
      else done = le;
    }
    const out = r.slice(); out[shape.done] = done; return out;
  });
}

// ---------- gọi Notion API ----------
async function api(path, version, body) {
  const res = await fetch("https://api.notion.com/v1" + path, {
    method: "POST",
    headers: { Authorization: "Bearer " + process.env.NOTION_TOKEN, "Notion-Version": version, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = new Error(`Notion ${res.status}: ${(await res.text()).slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}
async function queryAll(path, version) {
  const pages = [];
  let cursor;
  do {
    const r = await api(path, version, { page_size: 100, ...(cursor ? { start_cursor: cursor } : {}) });
    pages.push(...r.results);
    cursor = r.has_more ? r.next_cursor : undefined;
  } while (cursor);
  return pages;
}
async function fetchPages(src) {
  try {
    return await queryAll(`/data_sources/${src.ds}/query`, "2025-09-03");
  } catch (e) {
    if (![400, 404].includes(e.status)) throw e;
    console.warn(`  data_sources API không dùng được (${e.message.slice(0, 80)}), thử API database cũ...`);
    return await queryAll(`/databases/${src.db}/query`, "2022-06-28");
  }
}

// ---------- đọc/ghi notion-data.js ----------
function loadExisting() {
  if (!existsSync(OUT)) return null;
  try {
    const w = {};
    new Function("window", readFileSync(OUT, "utf8"))(w);
    return w.NOTION_DATA || null;
  } catch { return null; }
}
export function renderData(d, generatedAt) {
  const arr = (rows) => "[\n" + rows.map((r) => "    " + JSON.stringify(r)).join(",\n") + "\n  ]";
  return `// TỰ ĐỘNG SINH bởi scripts/sync-notion.mjs - đừng sửa tay.
// rows (125 chủ đề): [tên, mã hệ, loại T/O, bắt đầu, kết thúc, id bài học, trạng thái 0/1/2, tự tin, số lần ôn, ngày ôn gần nhất, ghi chú, id trang, ngày học xong]
// kho: [tên, mã hệ, tầng 1-3, trạng thái, ưu tiên 0-3, tự tin, E/N, cập nhật, id bài, id trang, ngày học xong, link bản dịch (nếu có)]
window.NOTION_DATA = {
  snapshot: ${JSON.stringify(generatedAt.slice(0, 10))},
  generatedAt: ${JSON.stringify(generatedAt)},
  chapters: ${JSON.stringify(d.chapters)},
  rows: ${arr(d.rows)},
  kho: ${arr(d.kho)},
  th: {
    rotations: ${arr(d.th.rotations)},
    topics: ${arr(d.th.topics)},
    cases: ${arr(d.th.cases)},
    deep: ${arr(d.th.deep)}
  }
};
`;
}
const content = (d) => JSON.stringify({ rows: d.rows, kho: d.kho, th: d.th });

export async function main() {
  if (!process.env.NOTION_TOKEN) throw new Error("Thiếu NOTION_TOKEN");
  const old = loadExisting();
  const codes = Object.keys(CH_LABEL);
  const jobs = {
    mc: [SOURCES.mc, rowMc], kho: [SOURCES.kho, rowKho], rot: [SOURCES.rot, rowRot],
    top: [SOURCES.top, rowTop], cas: [SOURCES.cas, rowCas], dep: [SOURCES.dep, rowDep],
  };
  const got = {};
  const problems = [];
  for (const [key, [src, fn]] of Object.entries(jobs)) {
    try {
      got[key] = (await fetchPages(src)).map(fn).filter(Boolean);
      console.log(`  ${key}: ${got[key].length} dòng`);
    } catch (e) {
      if (src.required) throw new Error(`Không đọc được nguồn bắt buộc "${key}": ${e.message}`);
      problems.push(`${key}: ${e.message}`);
      console.warn(`  ${key}: LỖI, giữ dữ liệu cũ. ${e.message}`);
      console.log(`::warning title=Đồng bộ Notion::Nguồn ${key} lỗi, giữ dữ liệu cũ. Kiểm tra đã chia sẻ database cho integration chưa. ${e.message.slice(0, 120)}`);
    }
  }
  const oldTh = old?.th || {};
  const oldRows = { mc: old?.rows, kho: old?.kho, top: oldTh.topics, cas: oldTh.cases, dep: oldTh.deep };
  for (const k of Object.keys(SHAPE)) if (got[k]) got[k] = trackDone(got[k], oldRows[k], SHAPE[k]);
  if (got.mc.length < 10) throw new Error(`Chỉ đọc được ${got.mc.length} dòng của 125 chủ đề. Có thể integration chưa được chia sẻ database. Dừng để không ghi đè dữ liệu.`);
  const keep = (key, fallback) => got[key] ?? fallback;
  const oth = old?.th || { rotations: [], topics: [], cases: [], deep: [] };
  const data = {
    chapters: CH_LABEL,
    rows: got.mc.sort((a, b) => codes.indexOf(a[1]) - codes.indexOf(b[1]) || (a[3] || "9999").localeCompare(b[3] || "9999")),
    kho: keep("kho", old?.kho || []),
    th: {
      rotations: keep("rot", oth.rotations).sort((a, b) => a[1].localeCompare(b[1])),
      topics: keep("top", oth.topics), cases: keep("cas", oth.cases), deep: keep("dep", oth.deep),
    },
  };
  if (old && content(old) === content(data)) { console.log("Không có thay đổi."); return { changed: false, problems }; }
  writeFileSync(OUT, renderData(data, new Date().toISOString()));
  console.log("Đã ghi notion-data.js");
  return { changed: true, problems };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().then((r) => { if (r.problems.length) { console.error("Cảnh báo:\n" + r.problems.join("\n")); process.exitCode = 0; } })
        .catch((e) => { console.error(e.message); process.exit(1); });
}
