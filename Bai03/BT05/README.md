# Bài 3 — Module, File System và cơ sở dữ liệu
## Bài tập 5: Truy vấn nâng cao ($gte, sort) và Cập nhật dữ liệu (updateOne, $set)

### 1. Yêu cầu bài tập
- Kết nối cơ sở dữ liệu `qlsinhvien` và collection `students` từ Bài 4.
- Sử dụng phương thức `find()` kết hợp toán tử `$gte` để lọc sinh viên có điểm $\ge 7$.
- Sắp xếp kết quả trả về theo thứ tự điểm giảm dần sử dụng `sort({ diem: -1 })`.
- Cập nhật điểm số của một sinh viên cụ thể theo mã (`masv`) thông qua `updateOne()` và `$set`.
- Truy vấn và hiển thị lại toàn bộ danh sách sinh viên để kiểm chứng kết quả cập nhật.
- Đóng kết nối cơ sở dữ liệu an toàn khi hoàn tất.

### 2. Các bước thực hiện
1. **Kiểm tra dịch vụ MongoDB:** Đảm bảo MongoDB Server đang chạy trên máy (`localhost:27017`).
2. **Tạo tập tin mã nguồn:** Tạo file `bai05.js` chứa mã thực thi thao tác dữ liệu.
3. **Chạy chương trình:**
   ```bash
   node bai05.js