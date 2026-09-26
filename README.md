# Bảng Theo Dõi Ôn Thi

Dashboard theo dõi tiến độ 3 nguồn: 125 chủ đề (có hạn chót), Kho tri thức nội khoa, Thực hành lâm sàng 12 tháng (chỉ ôn lại).
Dữ liệu đọc từ Notion mỗi 30 phút bằng GitHub Actions (`.github/workflows/sync-notion.yml`).

## Các file

- `index.html`: trang dashboard (mở qua GitHub Pages)
- `notion-data.js`: dữ liệu từ Notion, **tự sinh**, đừng sửa tay
- `scripts/sync-notion.mjs`: script đọc Notion
- `.github/workflows/sync-notion.yml`: lịch chạy tự động

## Cài đặt

1. Notion: tạo kết nối (token chỉ có quyền *Đọc nội dung*), cấp quyền cho trang "Kỳ thi đánh giá năng lực hành nghề quốc gia".
2. GitHub → repo → Settings → Secrets and variables → Actions → New repository secret: tên `NOTION_TOKEN`, dán token.
3. Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
4. Tab Actions → "Đồng bộ Notion" → Run workflow. Chờ dấu tích xanh.
5. Mở `https://huuhuynh2k2-droid.github.io/on-thi-dashboard/`.

## Xử lý sự cố

- Chạy đỏ, "Thiếu NOTION_TOKEN": chưa tạo secret đúng tên `NOTION_TOKEN`.
- Chạy đỏ, "Chỉ đọc được N dòng": kết nối Notion chưa được cấp quyền cho database.
- Cảnh báo vàng "Nguồn kho/rot/top/cas/dep lỗi": nguồn đó chưa được cấp quyền, trang giữ dữ liệu cũ.
- Push bị từ chối 403: Settings → Actions → General → Workflow permissions → Read and write permissions.
- Trang chưa cập nhật: chờ 1-2 phút sau lần chạy rồi tải lại cứng (Cmd+Shift+R).
- Repo Public thì mọi nội dung trong `notion-data.js` (tên bài, trạng thái, ghi chú) ai cũng xem được.

Kiểm thử: `node test/sync.test.mjs`
