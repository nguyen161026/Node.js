// Hàm tính điểm trung bình của 3 môn
function tinhDiemTrungBinh(mon1, mon2, mon3) {
    const dtb = (mon1 + mon2 + mon3) / 3;
    // Làm tròn 2 chữ số thập phân (trả về kiểu số)
    return Number(dtb.toFixed(2));
}

// Hàm xếp loại học tập dựa trên điểm trung bình
function xepLoaiHocTap(dtb) {
    if (dtb >= 8) {
        return "Giỏi";
    } else if (dtb >= 6.5) {
        return "Khá";
    } else if (dtb >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Xuất các hàm ra ngoài bằng module.exports
module.exports = {
    tinhDiemTrungBinh,
    xepLoaiHocTap
};