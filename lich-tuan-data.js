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
"2026-10-05": {
 "note": "Tuần 05–11/10 · 125 chủ đề: Đau bụng cấp (T2–T3) → Bất thường chức năng gan (T4–T5) → Nghẹn, nuốt khó (T6).\nCó 2 ca trực Nội tiêu hoá (đi thêm) 17:00–06:00: T3 06/10 và CN 11/10. Tối T3 nhường cho trực; T4 sau trực chỉ học bài gan nhẹ, ngủ bù trưa. Ba vấn đề đào sâu bị lỡ (viêm đường mật TG18, sỏi OMC ASGE, thoát vị bẹn) dời sang T7.\nSáng sớm ôn 4 bài Nội tiết: Đường huyết (T2) → Lipid (T3) → Tuyến giáp (T5) → Cushing (T6); vòng 2 làm câu sai cả 4 bài (T7); vòng 3 đề trộn 40 câu (CN sáng).",
 "tips": [
  "Ca trực là buổi học lâm sàng tốt nhất trong tuần: mỗi ca bụng cấp tự định khu và chọn CLS trước khi xem y lệnh.",
  "Sau trực đừng cố học buổi trưa; ngủ bù xong học buổi chiều muộn sẽ nhớ tốt hơn.",
  "Ôn sáng: cố nhớ lại trước rồi mới mở bài; chỗ không nhớ ra mới là chỗ cần ghi Anki.",
  "Chiều nào chưa xong thì dồn sang khối Dự trữ sáng CN."
 ],
 "blocks": [
  {
   "d": 0,
   "s": "05:45",
   "e": "06:30",
   "k": "rev",
   "t": "Ôn: Rối loạn đường huyết",
   "sub": "Vòng 1 · Nhớ lại không mở tài liệu (5′ viết sơ đồ tiếp cận) → mở bài đối chiếu, tô chỗ quên → 10 câu MCQ · trọng tâm: DKA vs HHS, hạ đường huyết, mục tiêu đường huyết nội trú",
   "link": "3c8cb1425c8180d6b9e1e094e26e1ed1"
  },
  {
   "d": 0,
   "s": "07:00",
   "e": "11:30",
   "k": "bv1",
   "t": "Ngoại tiêu hoá",
   "sub": "Giao ban · đi buồng · theo mổ/khám. Ghi nhanh ca mới (MHxxx) và câu hỏi nảy ra để tối gửi Claude"
  },
  {
   "d": 0,
   "s": "11:30",
   "e": "13:15",
   "k": "rest",
   "t": "Nghỉ trưa",
   "sub": "Ăn trưa · ngủ 20–30′"
  },
  {
   "d": 0,
   "s": "13:30",
   "e": "15:00",
   "k": "mc",
   "t": "Đau bụng cấp (1/2)",
   "sub": "Lý thuyết · cơ chế đau tạng–thành–quy chiếu, định khu 9 vùng, nguyên nhân ngoài ổ bụng (NMCT, DKA, viêm phổi đáy)",
   "link": "3cbcb1425c8181819d1cd99f4d65f62d"
  },
  {
   "d": 0,
   "s": "15:15",
   "e": "17:00",
   "k": "mc",
   "t": "Đau bụng cấp (1/2)",
   "sub": "Sơ đồ tiếp cận · dấu hiệu báo động/bụng ngoại khoa, chọn CLS (lipase, siêu âm, CT), Alvarado",
   "link": "3cbcb1425c8181819d1cd99f4d65f62d"
  },
  {
   "d": 0,
   "s": "17:00",
   "e": "19:00",
   "k": "rest",
   "t": "Thể dục · ăn tối · nghỉ",
   "sub": "Vận động 30′"
  },
  {
   "d": 0,
   "s": "19:00",
   "e": "19:30",
   "k": "ca",
   "t": "Bệnh phòng · cập nhật ca hôm nay",
   "sub": "Gửi Claude ca mới/diễn tiến → Notion + trang Bệnh phòng"
  },
  {
   "d": 0,
   "s": "19:30",
   "e": "20:45",
   "k": "deep",
   "t": "Lâm sàng Ngoại: đau hố chậu phải >60 tuổi",
   "sub": "Nối với Đau bụng cấp chiều nay · VRT hay u manh tràng, chỉ định mổ, thời điểm nội soi (ca MH001)",
   "link": "3ebcb1425c818124b1cdd5fe4daffd0a"
  },
  {
   "d": 0,
   "s": "21:00",
   "e": "22:15",
   "k": "deep",
   "t": "Lâm sàng Nội TH: viêm tụy cấp tái phát do sỏi túi mật",
   "sub": "Khi nào CT, kháng sinh dự phòng, thời điểm cắt túi mật (ca TH-004)",
   "link": "3ebcb1425c8181518890c0741a0c3d9b"
  },
  {
   "d": 0,
   "s": "22:15",
   "e": "22:35",
   "k": "rev",
   "t": "Chốt ngày",
   "sub": "Thẻ Anki từ bài chiều + 3 câu hỏi lâm sàng trong ngày; ngủ trước 23:00"
  },
  {
   "d": 1,
   "s": "05:45",
   "e": "06:30",
   "k": "rev",
   "t": "Ôn: Rối loạn lipid máu",
   "sub": "Vòng 1 · Nhớ lại không mở tài liệu (5′ viết sơ đồ tiếp cận) → mở bài đối chiếu, tô chỗ quên → 10 câu MCQ · trọng tâm: phân tầng nguy cơ, đích LDL-C, khi nào thêm ezetimibe/PCSK9i",
   "link": "3c9cb1425c8180ef8a51c898219a811f"
  },
  {
   "d": 1,
   "s": "07:00",
   "e": "11:30",
   "k": "bv1",
   "t": "Ngoại tiêu hoá",
   "sub": "Giao ban · đi buồng · theo mổ/khám. Ghi nhanh ca mới (MHxxx) và câu hỏi nảy ra để tối gửi Claude"
  },
  {
   "d": 1,
   "s": "11:30",
   "e": "13:15",
   "k": "rest",
   "t": "Nghỉ trưa",
   "sub": "Ăn trưa · ngủ 20–30′"
  },
  {
   "d": 1,
   "s": "13:30",
   "e": "15:00",
   "k": "mc",
   "t": "Đau bụng cấp (2/2)",
   "sub": "Xử trí theo nguyên nhân · VRT, thủng tạng rỗng, tắc ruột, VTC, viêm túi mật, thiếu máu mạc treo, vỡ phình ĐMC",
   "link": "3cbcb1425c8181819d1cd99f4d65f62d"
  },
  {
   "d": 1,
   "s": "15:15",
   "e": "16:15",
   "k": "mc",
   "t": "Đau bụng cấp · MCQ",
   "sub": "MCQ, bẫy đề (người già/đái tháo đường đau ít, corticoid che dấu hiệu), Anki",
   "link": "3cbcb1425c8181819d1cd99f4d65f62d"
  },
  {
   "d": 1,
   "s": "16:15",
   "e": "17:00",
   "k": "rest",
   "t": "Ăn tối sớm · chuẩn bị đi trực",
   "sub": "Mang theo điện thoại có Anki + ngân hàng đề"
  },
  {
   "d": 1,
   "s": "17:00",
   "e": "24:00",
   "k": "truc",
   "t": "Trực Nội tiêu hoá (đi thêm)",
   "sub": "Lúc rảnh: Anki + 30 câu Đau bụng cấp. Ca đau bụng cấp vào trực = học thật: tự định khu, tự chọn CLS trước khi xem chỉ định",
   "link": "3cbcb1425c8181819d1cd99f4d65f62d"
  },
  {
   "d": 2,
   "s": "00:00",
   "e": "06:00",
   "k": "truc",
   "t": "Trực Nội tiêu hoá (tiếp)",
   "sub": "Ghi lại 1–2 ca hay trong đêm để tối gửi Claude"
  },
  {
   "d": 2,
   "s": "07:00",
   "e": "11:30",
   "k": "bv1",
   "t": "Ngoại tiêu hoá",
   "sub": "Sau trực · giao ban, đi buồng; tránh nhận việc nặng nếu được"
  },
  {
   "d": 2,
   "s": "11:30",
   "e": "15:00",
   "k": "rest",
   "t": "Ngủ bù sau trực",
   "sub": "Ngủ liền 2–3 giờ, không học buổi trưa"
  },
  {
   "d": 2,
   "s": "15:00",
   "e": "16:30",
   "k": "mc",
   "t": "Bất thường chức năng gan (1/2)",
   "sub": "Lý thuyết · kiểu tổn thương theo R (tế bào gan / ứ mật / hỗn hợp), AST/ALT, ALP–GGT, bilirubin trực tiếp–gián tiếp",
   "link": "3cbcb1425c8181679bc6d09008374cdb"
  },
  {
   "d": 2,
   "s": "16:30",
   "e": "19:00",
   "k": "rest",
   "t": "Thể dục nhẹ · ăn tối · nghỉ",
   "sub": ""
  },
  {
   "d": 2,
   "s": "19:00",
   "e": "19:30",
   "k": "ca",
   "t": "Bệnh phòng · gửi ca trong ngày + ca trực đêm qua",
   "sub": "Gửi Claude → Notion + trang Bệnh phòng"
  },
  {
   "d": 2,
   "s": "19:30",
   "e": "21:00",
   "k": "mc",
   "t": "Bất thường chức năng gan (1/2)",
   "sub": "Sơ đồ nguyên nhân · virus, rượu (AST/ALT>2), thuốc (DILI), MASLD, tự miễn, Wilson, tắc mật",
   "link": "3cbcb1425c8181679bc6d09008374cdb"
  },
  {
   "d": 2,
   "s": "21:00",
   "e": "22:00",
   "k": "deep",
   "t": "Lâm sàng Nội TH: xơ gan mất bù, phân đen, bệnh não gan",
   "sub": "Đọc nhẹ, nối với bài gan · XHTH do tăng áp cửa, chọc báng, khi nào ngừng lợi tiểu (ca TH-003). Ngủ sớm trước 22:30",
   "link": "3ebcb1425c8181ab82b3e431ee952786"
  },
  {
   "d": 3,
   "s": "05:45",
   "e": "06:30",
   "k": "rev",
   "t": "Ôn: Bất thường chức năng tuyến giáp",
   "sub": "Vòng 1 · Nhớ lại không mở tài liệu (5′ viết sơ đồ tiếp cận) → mở bài đối chiếu, tô chỗ quên → 10 câu MCQ · trọng tâm: đọc cặp TSH–FT4, cơn bão giáp, hôn mê phù niêm",
   "link": "3c8cb1425c81806b8178d43d6b99ead6"
  },
  {
   "d": 3,
   "s": "07:00",
   "e": "11:30",
   "k": "bv1",
   "t": "Ngoại tiêu hoá",
   "sub": "Giao ban · đi buồng · theo mổ/khám. Ghi nhanh ca mới (MHxxx) và câu hỏi nảy ra để tối gửi Claude"
  },
  {
   "d": 3,
   "s": "11:30",
   "e": "13:15",
   "k": "rest",
   "t": "Nghỉ trưa",
   "sub": "Ăn trưa · ngủ 20–30′"
  },
  {
   "d": 3,
   "s": "13:30",
   "e": "15:00",
   "k": "mc",
   "t": "Bất thường chức năng gan (2/2)",
   "sub": "Đánh giá mức độ · INR, albumin, suy gan cấp, định luật Hy, khi nào siêu âm/MRCP/sinh thiết, khi nào chuyển chuyên khoa",
   "link": "3cbcb1425c8181679bc6d09008374cdb"
  },
  {
   "d": 3,
   "s": "15:15",
   "e": "16:15",
   "k": "mc",
   "t": "Bất thường chức năng gan · MCQ",
   "sub": "MCQ, bẫy đề (ALT rất cao: thiếu máu gan/thuốc/virus cấp; ALP tăng đơn độc: xương hay gan), Anki",
   "link": "3cbcb1425c8181679bc6d09008374cdb"
  },
  {
   "d": 3,
   "s": "16:15",
   "e": "17:00",
   "k": "mc",
   "t": "Ngân hàng đề · 30 câu",
   "sub": "Gan + tuyến giáp sáng nay"
  },
  {
   "d": 3,
   "s": "17:00",
   "e": "19:00",
   "k": "rest",
   "t": "Thể dục · ăn tối · nghỉ",
   "sub": "Vận động 30′"
  },
  {
   "d": 3,
   "s": "19:00",
   "e": "19:30",
   "k": "ca",
   "t": "Bệnh phòng · cập nhật ca hôm nay",
   "sub": "Gửi Claude ca mới/diễn tiến → Notion + trang Bệnh phòng"
  },
  {
   "d": 3,
   "s": "19:30",
   "e": "20:45",
   "k": "deep",
   "t": "Lâm sàng Ngoại: kiềm toan hỗn hợp khi truyền bicarbonate trong AKI",
   "sub": "Tương tác K–Na–Ca (ca NG-001)",
   "link": "3eacb1425c81819ab22fdb5e52c7b104"
  },
  {
   "d": 3,
   "s": "21:00",
   "e": "22:15",
   "k": "deep",
   "t": "Lâm sàng Nội TH: TACE bắc cầu/hạ giai đoạn trước ghép gan",
   "sub": "Milan, UCSF, ngưỡng AFP 400/1000 (ca TH-001)",
   "link": "3ebcb1425c81811ca784d11248e7654e"
  },
  {
   "d": 3,
   "s": "22:15",
   "e": "22:35",
   "k": "rev",
   "t": "Chốt ngày",
   "sub": "Thẻ Anki từ bài chiều + 3 câu hỏi lâm sàng trong ngày; ngủ trước 23:00"
  },
  {
   "d": 4,
   "s": "05:45",
   "e": "06:30",
   "k": "rev",
   "t": "Ôn: Hội chứng Cushing",
   "sub": "Vòng 1 · Nhớ lại không mở tài liệu (5′ viết sơ đồ tiếp cận) → mở bài đối chiếu, tô chỗ quên → 10 câu MCQ · trọng tâm: test sàng lọc (1 mg dexa, cortisol nước bọt đêm), ACTH phụ thuộc hay không",
   "link": "3c8cb1425c8180fd9fb9fa88bb1133d1"
  },
  {
   "d": 4,
   "s": "07:00",
   "e": "11:30",
   "k": "bv1",
   "t": "Ngoại tiêu hoá",
   "sub": "Giao ban · đi buồng · theo mổ/khám. Ghi nhanh ca mới (MHxxx) và câu hỏi nảy ra để tối gửi Claude"
  },
  {
   "d": 4,
   "s": "11:30",
   "e": "13:15",
   "k": "rest",
   "t": "Nghỉ trưa",
   "sub": "Ăn trưa · ngủ 20–30′"
  },
  {
   "d": 4,
   "s": "13:30",
   "e": "15:00",
   "k": "mc",
   "t": "Nghẹn, nuốt khó",
   "sub": "Lý thuyết · hầu họng vs thực quản, cơ học (rắn) vs vận động (rắn + lỏng), dấu hiệu báo động",
   "link": "3cbcb1425c8181a29d45f14d573e3be4"
  },
  {
   "d": 4,
   "s": "15:15",
   "e": "16:15",
   "k": "mc",
   "t": "Nghẹn, nuốt khó",
   "sub": "CLS và nguyên nhân · nội soi trước, X quang cản quang, đo áp lực (Chicago v4.0); achalasia, ung thư thực quản, EoE, hẹp do trào ngược",
   "link": "3cbcb1425c8181a29d45f14d573e3be4"
  },
  {
   "d": 4,
   "s": "16:15",
   "e": "17:00",
   "k": "mc",
   "t": "Nghẹn, nuốt khó · MCQ",
   "sub": "MCQ, bẫy đề (ung thư: nuốt khó tiến triển + sụt cân; achalasia: lỏng và rắn ngay từ đầu), Anki",
   "link": "3cbcb1425c8181a29d45f14d573e3be4"
  },
  {
   "d": 4,
   "s": "17:00",
   "e": "19:00",
   "k": "rest",
   "t": "Thể dục · ăn tối · nghỉ",
   "sub": "Vận động 30′"
  },
  {
   "d": 4,
   "s": "19:00",
   "e": "19:30",
   "k": "ca",
   "t": "Bệnh phòng · cập nhật ca hôm nay",
   "sub": "Gửi Claude ca mới/diễn tiến → Notion + trang Bệnh phòng"
  },
  {
   "d": 4,
   "s": "19:30",
   "e": "20:45",
   "k": "deep",
   "t": "Lâm sàng Ngoại: trĩ độ III–IV",
   "sub": "Chỉ định mổ, chọn kỹ thuật, chuẩn bị trước mổ (ca MH002)",
   "link": "3ebcb1425c8181888e89fb3aac719cae"
  },
  {
   "d": 4,
   "s": "21:00",
   "e": "22:15",
   "k": "deep",
   "t": "Lâm sàng Nội TH (học trước): áp xe gan vs u gan",
   "sub": "Vấn đề của tuần 12/10, học trước vì vừa xong bài gan (ca TH-005)",
   "link": "3ebcb1425c81814baaedd33b2165a94d"
  },
  {
   "d": 4,
   "s": "22:15",
   "e": "22:35",
   "k": "rev",
   "t": "Chốt ngày",
   "sub": "Thẻ Anki từ bài chiều + 3 câu hỏi lâm sàng trong ngày; ngủ trước 23:00"
  },
  {
   "d": 5,
   "s": "07:30",
   "e": "08:30",
   "k": "rev",
   "t": "Ôn vòng 2: 4 bài Nội tiết",
   "sub": "Chỉ làm câu sai + Anki của Đường huyết, Lipid, Tuyến giáp, Cushing",
   "link": "3c8cb1425c81806b8178d43d6b99ead6"
  },
  {
   "d": 5,
   "s": "08:30",
   "e": "10:00",
   "k": "mc",
   "t": "Ngân hàng đề · đề 40 câu Tiêu hoá",
   "sub": "Trộn Đau bụng cấp + Gan + Nuốt khó; ghi bẫy mới vào Lưu ý MCQ"
  },
  {
   "d": 5,
   "s": "10:15",
   "e": "11:30",
   "k": "deep",
   "t": "Lâm sàng Ngoại: viêm đường mật cấp nặng TG18 độ III",
   "sub": "Dời từ T3 (trực) · tiêu chuẩn suy cơ quan, thời điểm dẫn lưu",
   "link": "3eacb1425c8181fbac46c13dad58d1c0"
  },
  {
   "d": 5,
   "s": "11:30",
   "e": "14:00",
   "k": "rest",
   "t": "Nghỉ trưa",
   "sub": ""
  },
  {
   "d": 5,
   "s": "14:00",
   "e": "15:15",
   "k": "deep",
   "t": "Lâm sàng Ngoại: thoát vị bẹn",
   "sub": "Dời từ T4 (sau trực) · phân loại, biến chứng nghẹt, chỉ định và kỹ thuật mổ (ca MH003)",
   "link": "3e9cb1425c818195ada6d8e675a2acd9"
  },
  {
   "d": 5,
   "s": "15:30",
   "e": "16:45",
   "k": "deep",
   "t": "Lâm sàng Nội TH: nguy cơ sỏi ống mật chủ (ASGE 2019)",
   "sub": "Dời từ T3 (trực) · phân tầng nguy cơ, chọn MRCP / EUS / chụp đường mật trong mổ (ca TH-006)",
   "link": "3ebcb1425c81819fb26cee69c3046270"
  },
  {
   "d": 5,
   "s": "19:30",
   "e": "21:00",
   "k": "mc",
   "t": "Đề tổng hợp tuần",
   "sub": "Làm lại toàn bộ câu sai cả tuần (cả 4 bài nội tiết lẫn 3 bài tiêu hoá)"
  },
  {
   "d": 6,
   "s": "08:00",
   "e": "09:30",
   "k": "rev",
   "t": "Đề trộn 4 bài Nội tiết · 40 câu",
   "sub": "Đường huyết, lipid, tuyến giáp, Cushing · đây là vòng ôn thứ 3, chấm điểm từng bài để biết bài nào cần ôn thêm"
  },
  {
   "d": 6,
   "s": "09:30",
   "e": "11:00",
   "k": "task",
   "t": "Dự trữ + tổng kết ca trong tuần",
   "sub": "Bù khối chưa tick; viết bài học rút ra cho ca MH/TH tuần này"
  },
  {
   "d": 6,
   "s": "11:00",
   "e": "11:30",
   "k": "oth",
   "t": "Lập lịch tuần 12–18/10",
   "sub": "Gửi Claude: Báng bụng, Khối ở bụng, Trướng bụng + lịch trực tuần tới"
  },
  {
   "d": 6,
   "s": "13:00",
   "e": "16:00",
   "k": "rest",
   "t": "Ngủ trưa trước trực",
   "sub": ""
  },
  {
   "d": 6,
   "s": "16:00",
   "e": "17:00",
   "k": "rest",
   "t": "Ăn tối sớm · chuẩn bị đi trực",
   "sub": ""
  },
  {
   "d": 6,
   "s": "17:00",
   "e": "24:00",
   "k": "truc",
   "t": "Trực Nội tiêu hoá (đi thêm)",
   "sub": "Lúc rảnh: xem trước Báng bụng (mục tiêu + đề cương) + Anki. Trực tới 06:00 T2 12/10"
  }
 ]
}
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
