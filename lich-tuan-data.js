// Lịch tuần do Claude đề xuất (khi Minh gửi lịch Chủ nhật). Trang lich-tuan.html ưu tiên bản này hơn bản tự động.
// Khóa = ngày thứ Hai của tuần (YYYY-MM-DD). d = 0 (T2) … 6 (CN). s/e = "HH:MM".
// k (loại): bv1 Ngoại tiêu hoá · bv2 Nội tiêu hoá · truc Trực · mc Học 125 chủ đề · deep Đào sâu/chuyên đề
//           ca Bệnh phòng · rev Ôn lại · task Việc riêng · oth Lớp/giao ban/cá nhân · rest Nghỉ
// Ví dụ:
// "2026-10-05": {
//   note: "Tuần này ưu tiên trả nợ 125 chủ đề Tiêu hoá…",
//   tips: ["…"],
//   blocks: [ {d:0, s:"07:00", e:"11:30", k:"bv1", t:"Ngoại tiêu hoá", sub:"Đi buồng, theo mổ"}, … ]
// }
window.LICH_TUAN = {
};
