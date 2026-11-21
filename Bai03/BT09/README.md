# BÀI TẬP 09: KẾT NỐI VÀ THAO TÁC CƠ SỞ DỮ LIỆU MONGODB TRONG NODE.JS
---

## 1. Thông tin chung
- **Học phần:** Lập trình Node.js / Phát triển ứng dụng Web
- **Chương:** Bài 3 — Module, File System và Cơ sở dữ liệu
- **Bài tập:** Bt09 (Thao tác cơ sở dữ liệu MongoDB: Insert, DeleteOne, DeleteMany, Find)
- **Công nghệ sử dụng:** Node.js, Thư viện `mongodb` driver, MongoDB Database

---

## 2. Mô tả yêu cầu bài toán
Bài tập yêu cầu kết nối tới MongoDB, thao tác với database `qlsinhvien` và collection riêng biệt `students_test`:
1. Kết nối database `qlsinhvien`, sử dụng collection `students_test`.
2. Thêm ít nhất 5 sinh viên mẫu bao gồm các trường: `masv`, `hoten`, `tuoi`, `diem`.
3. Sử dụng phương thức `deleteOne()` để xóa một sinh viên dựa vào mã sinh viên (`masv`).
4. Sử dụng phương thức `deleteMany()` để xóa toàn bộ các sinh viên có điểm số dưới 5 (`diem < 5`).
5. Hiển thị kết quả thống kê số bản ghi đã xóa và sử dụng `find()` để lấy, hiển thị danh sách các sinh viên còn lại lên Terminal.

---

## 3. Cấu trúc thư mục dự án
```text
NodeJS/
└── Bai03/
    └── Bt09/
        ├── bai09.js     # Mã nguồn chính kết nối và xử lý MongoDB
        ├── ketqua.png   # Ảnh chụp màn hình kết quả chạy chương trình trên Terminal
        └── Readme.md    # Tài liệu mô tả chi tiết bài tập