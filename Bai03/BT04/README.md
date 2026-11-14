# Bài 3 — Module, File System và cơ sở dữ liệu
## Bài tập: Kết nối MongoDB và thao tác dữ liệu với Node.js (`bai04.js`)

### 1. Giới thiệu yêu cầu
- Kết nối MongoDB đang chạy trên máy cục bộ (`mongodb://localhost:27017`).
- Sử dụng Database: `qlsinhvien`, Collection: `students`.
- Thêm ít nhất 3 sinh viên sử dụng phương thức `insertMany()`.
- Truy vấn và hiển thị danh sách sinh viên ra màn hình bằng `find()`.
- Đóng kết nối an toàn sau khi hoàn thành.

### 2. Các bước thực hiện
1. **Cài đặt môi trường & thư viện:**
   ```bash
   npm init -y
   npm install mongodb