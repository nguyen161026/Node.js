const fs = require('fs');
const path = require('path');

// Định nghĩa đường dẫn thư mục và tập tin
const dirData = path.join(__dirname, 'data');
const fileGhiChu = path.join(dirData, 'ghichu.txt');
const fileGhiChuMoi = path.join(dirData, 'ghichu_moi.txt');
const fileTam = path.join(dirData, 'tam.txt');

console.log("=== BẮT ĐẦU THỰC HIỆN CÁC THAO TÁC FILE SYSTEM ===");

// 1. Tạo thư mục 'data' (nếu chưa tồn tại)
if (!fs.existsSync(dirData)) {
    fs.mkdirSync(dirData);
    console.log("[Thành công] Đã tạo thư mục 'data'.");
} else {
    console.log("[Thông báo] Thư mục 'data' đã tồn tại.");
}

// 2. Ghi nội dung vào tập tin 'ghichu.txt' (ít nhất 3 dòng)
const noiDungGhi = "Dòng 1: Học lập trình Node.js cơ bản.\n" +
                   "Dòng 2: Thực hành các module File System (fs).\n" +
                   "Dòng 3: Hoàn thành bài tập 08 đạt điểm tối đa.";

fs.writeFileSync(fileGhiChu, noiDungGhi, 'utf8');
console.log("[Thành công] Đã tạo và ghi nội dung vào tập tin 'ghichu.txt'.");

// 3. Đổi tên tập tin 'ghichu.txt' thành 'ghichu_moi.txt' bằng fs.rename()
fs.renameSync(fileGhiChu, fileGhiChuMoi);
console.log("[Thành công] Đã đổi tên tập tin 'ghichu.txt' thành 'ghichu_moi.txt'.");

// 4. Đọc và hiển thị nội dung tập tin sau khi đổi tên
console.log("---------------------------------------------------------");
console.log("Nội dung tập tin 'ghichu_moi.txt' sau khi đọc:");
const noiDungDoc = fs.readFileSync(fileGhiChuMoi, 'utf8');
console.log(noiDungDoc.trim());
console.log("---------------------------------------------------------");

// 5. Tạo tập tin tạm 'tam.txt'
fs.writeFileSync(fileTam, "Đây là tập tin tạm chuẩn bị bị xóa.", 'utf8');
console.log("[Thành công] Đã tạo tập tin tạm 'tam.txt'.");

// 6. Xóa tập tin tạm 'tam.txt' bằng fs.unlink()
fs.unlinkSync(fileTam);
console.log("[Thành công] Đã xóa tập tin tạm 'tam.txt' bằng fs.unlink().");

console.log("=== HOÀN TẤT TẤT CẢ CÁC THAO TÁC FILE SYSTEM ===");