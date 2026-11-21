# BÀI TẬP 08: MODULE FILE SYSTEM (FS) TRONG NODE.JS
---

## 1. Thông tin chung
- **Học phần:** Lập trình Node.js / Phát triển ứng dụng Web
- **Chương:** Bài 3 — Module, File System và Cơ sở dữ liệu
- **Bài tập:** Bt08 (Thao tác quản lý thư mục và tập tin với module `fs`)
- **Công nghệ sử dụng:** Node.js (`fs` module, `path` module)

---

## 2. Mô tả yêu cầu bài toán
Bài tập yêu cầu sử dụng module tích hợp sẵn `fs` (File System) của Node.js để thực hiện các thao tác quản lý tệp tin và thư mục hệ thống:
1. Tạo thư mục `data` và tập tin `ghichu.txt`.
2. Ghi vào tập tin `ghichu.txt` tối thiểu 3 dòng nội dung văn bản.
3. Sử dụng hàm `fs.rename()` (hoặc `fs.renameSync()`) để đổi tên tập tin thành `ghichu_moi.txt`.
4. Đọc nội dung từ `ghichu_moi.txt` và in kết quả hiển thị lên Terminal.
5. Tạo một tập tin tạm `tam.txt`, sau đó sử dụng hàm `fs.unlink()` (hoặc `fs.unlinkSync()`) để xóa tập tin này.
6. Hiển thị thông báo kết quả tường minh cho từng thao tác thực hiện.

---

## 3. Cấu trúc thư mục dự án
```text
NodeJS/
└── Bai03/
    └── Bt08/
        ├── data/          # Thư mục được tạo tự động chứa các file dữ liệu
        ├── bai08.js       # Mã nguồn chính thực thi các thao tác File System
        ├── ketqua.png     # Ảnh chụp màn hình kết quả chạy chương trình trên Terminal
        └── Readme.md      # Tài liệu mô tả chi tiết bài tập