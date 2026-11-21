// Gọi module xulyDiem.js bằng require()
const xulyDiem = require('./xulyDiem');

// Tạo dữ liệu danh sách 3 sinh viên
const danhSachSinhVien = [
    {
        hoTen: "Nguyễn Văn An",
        diemToan: 8.5,
        diemLy: 9.0,
        diemHoa: 8.0
    },
    {
        hoTen: "Trần Thị Bình",
        diemToan: 7.0,
        diemLy: 6.5,
        diemHoa: 7.5
    },
    {
        hoTen: "Lê Hoàng Cường",
        diemToan: 4.5,
        diemLy: 5.0,
        diemHoa: 4.0
    }
];

console.log("==========================================================");
console.log("          KẾT QUẢ HỌC TẬP CỦA SINH VIÊN");
console.log("==========================================================");

// Duyệt qua từng sinh viên, tính điểm trung bình và xếp loại
danhSachSinhVien.forEach((sv, index) => {
    const dtb = xulyDiem.tinhDiemTrungBinh(sv.diemToan, sv.diemLy, sv.diemHoa);
    const xepLoai = xulyDiem.xepLoaiHocTap(dtb);

    console.log(`${index + 1}. Họ và tên      : ${sv.hoTen}`);
    console.log(`   Điểm 3 môn     : Toán (${sv.diemToan}), Lý (${sv.diemLy}), Hóa (${sv.diemHoa})`);
    console.log(`   Điểm trung bình: ${dtb}`);
    console.log(`   Xếp loại       : ${xepLoai}`);
    console.log("----------------------------------------------------------");
});