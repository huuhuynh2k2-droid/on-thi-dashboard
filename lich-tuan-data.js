// Lịch tuần do Claude viết. Trang lich-tuan.html dùng theo thứ tự ưu tiên:
//   1) window.LICH_TUAN["YYYY-MM-DD thứ Hai"]  → bản riêng cho 1 tuần (tuần có trực, nghỉ, lịch khác)
//   2) window.LICH_TUAN_MAU                     → LỊCH CỐ ĐỊNH, tự áp cho mọi tuần
//   3) bản nháp tự động của trang
// d = 0 (T2) … 6 (CN). s/e = "HH:MM".
// k (loại): bv1 Ngoại tiêu hoá · bv2 Nội tiêu hoá · truc Trực · mc Học 125 chủ đề · deep Đào sâu/chuyên đề
//           ca Bệnh phòng · rev Ôn lại · task Việc riêng · oth Lớp/giao ban/cá nhân · rest Nghỉ
// fill (chỉ trong lịch cố định): trang tự điền tên bài từ Notion mỗi tuần
//   mc1  bài 125 chủ đề kế tiếp theo hạn (phần lý thuyết)   · mc2  cùng bài đó (phần MCQ)
//   ngoai vấn đề đào sâu / chuyên đề Ngoại khoa tồn đến tuần · noi  vấn đề đào sâu Tiêu hoá (đi thêm)
//   rev  bài đến hạn ôn lại (125 chủ đề trước, rồi Kho tri thức)
// Hết bài để điền thì khối giữ nguyên t/sub ghi sẵn.

window.LICH_TUAN = {
};

(function () {
  var B = [];
  function add(d, s, e, k, t, sub, fill) { B.push({ d: d, s: s, e: e, k: k, t: t, sub: sub || "", fill: fill || "" }); }

  /* ---- Thứ Hai → Thứ Sáu: sáng Ngoại tiêu hoá · chiều 125 chủ đề · tối lâm sàng Ngoại + Nội tiêu hoá ---- */
  for (var d = 0; d <= 4; d++) {
    add(d, "05:45", "06:30", "rev", "Ôn lại buổi sáng", "Anki thẻ đến hạn + bài đến hạn ôn (đầu óc tỉnh, nhớ tốt nhất)", "rev");
    add(d, "07:00", "11:30", "bv1", "Ngoại tiêu hoá", "Giao ban · đi buồng · theo mổ/khám. Ghi nhanh ca mới (MHxxx) và câu hỏi nảy ra để tối gửi Claude");
    add(d, "11:30", "13:15", "rest", "Nghỉ trưa", "Ăn trưa · ngủ 20–30′");
    add(d, "13:30", "15:00", "mc", "125 chủ đề · lý thuyết", "Phần 1 · lý thuyết + sơ đồ cơ chế", "mc1");
    add(d, "15:15", "16:15", "mc", "125 chủ đề · MCQ", "Phần 2 · MCQ, bẫy đề, Anki", "mc2");
    add(d, "16:15", "17:00", "mc", "Ngân hàng đề · 30 câu", "Luyện câu ca lâm sàng của bài vừa học + bài hôm trước; câu sai ghi vào Lưu ý MCQ");
    add(d, "17:00", "19:00", "rest", "Thể dục · ăn tối · nghỉ", "Vận động 30′, tách hẳn khỏi bàn học");
    add(d, "19:00", "19:30", "ca", "Bệnh phòng · cập nhật ca hôm nay", "Gửi Claude ca mới/diễn tiến → Notion + trang Bệnh phòng; đọc phân tích AI");
    add(d, "19:30", "20:45", "deep", "Lâm sàng Ngoại tiêu hoá", "Đọc theo ca mổ/khám sáng nay: chỉ định mổ, chuẩn bị trước mổ, biến chứng sau mổ", "ngoai");
    add(d, "21:00", "22:15", "deep", "Lâm sàng Nội tiêu hoá (đi thêm)", "Ôn ca TH đang theo dõi: chẩn đoán → CLS → điều trị → theo dõi", "noi");
    add(d, "22:15", "22:35", "rev", "Chốt ngày", "Làm thẻ Anki từ bài chiều + ghi 3 câu hỏi lâm sàng của ngày; xem lịch mai. Ngủ trước 23:00");
  }

  /* ---- Thứ Bảy: trả nợ + đề tổng hợp ---- */
  add(5, "07:30", "08:30", "rev", "Ôn lại cuối tuần", "Bài đến hạn ôn + câu sai trong tuần", "rev");
  add(5, "08:30", "10:00", "mc", "125 chủ đề · lý thuyết", "Phần 1 · lý thuyết + sơ đồ cơ chế", "mc1");
  add(5, "10:15", "11:15", "mc", "125 chủ đề · MCQ", "Phần 2 · MCQ, bẫy đề, Anki", "mc2");
  add(5, "11:15", "12:00", "mc", "Ngân hàng đề · 40 câu Tiêu hoá", "Trộn các bài đã học trong tuần");
  add(5, "12:00", "14:00", "rest", "Nghỉ trưa", "");
  add(5, "14:00", "15:30", "deep", "Bù chuyên đề Ngoại khoa tồn", "Vấn đề đào sâu/chuyên đề Ngoại chưa kịp trong tuần", "ngoai");
  add(5, "15:30", "17:00", "deep", "Tổng kết ca Tiêu hoá trong tuần", "Viết bài học rút ra cho từng ca TH/MH; đánh dấu vấn đề cần đào sâu tuần sau", "noi");
  add(5, "19:30", "21:00", "mc", "Đề tổng hợp tuần", "Làm lại toàn bộ câu sai trong tuần + 40 câu trộn; ghi bẫy mới vào Notion");

  /* ---- Chủ nhật: ôn kho tri thức, dự trữ, lập lịch ---- */
  add(6, "08:00", "09:30", "rev", "Ôn Kho tri thức", "Bài Kho tri thức nội khoa lâu chưa ôn", "rev");
  add(6, "09:30", "11:00", "task", "Dự trữ · bù việc chưa xong", "Khối nào trong tuần chưa tick xong thì làm ở đây; nếu xong hết thì nghỉ");
  add(6, "14:00", "17:30", "rest", "Nghỉ ngơi, gia đình", "");
  add(6, "20:00", "20:30", "oth", "Lập lịch tuần tới", "Có trực/lịch khác thì nhập lịch cố định → Gửi Claude xếp lịch để có bản riêng");
  add(6, "20:30", "21:30", "mc", "Xem trước 125 chủ đề tuần tới", "Đọc lướt mục tiêu + đề cương 2 bài đầu tuần");

  window.LICH_TUAN_MAU = {
    note: "Lịch cố định: sáng T2–T6 đi Ngoại tiêu hoá · chiều 125 chủ đề (mỗi chiều trọn 1 bài: lý thuyết → MCQ → ngân hàng đề) · tối lâm sàng Ngoại tiêu hoá rồi Nội tiêu hoá đi thêm. T7 trả nợ + đề tổng hợp, CN ôn kho tri thức và lập lịch.\nTên bài trong các khối được tự điền từ Notion theo hạn chót mỗi tuần.",
    tips: [
      "Chiều nào chưa xong phần MCQ thì để dồn sang khối 'Dự trữ' sáng CN, đừng cắt khối tối.",
      "Ca bệnh gặp buổi sáng → câu hỏi nảy ra ghi ngay, 19:00 gửi Claude, 19:30 đọc đúng vấn đề đó: học theo ca nhớ lâu hơn học theo sách.",
      "Tuần có trực hoặc lịch khác: bấm 'Gửi Claude xếp lịch', Claude viết bản riêng cho tuần đó (ưu tiên hơn lịch cố định).",
      "Sau ngày trực: bỏ khối 05:45 và khối tối Nội tiêu hoá, ngủ bù."
    ],
    blocks: B
  };
})();
