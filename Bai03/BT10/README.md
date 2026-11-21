# BÀI TẬP 10: SỬ DỤNG AGGREGATE VÀ \$LOOKUP KẾT BẢNG TRONG MONGODB VỚI NODE.JS
---

## 1. Thông tin chung
- **Học phần:** Lập trình Node.js / Phát triển ứng dụng Web
- **Chương:** Bài 3 — Module, File System và Cơ sở dữ liệu
- **Bài tập:** Bt10 (Truy vấn kết hợp dữ liệu giữa các collection bằng `$lookup`)
- **Công nghệ sử dụng:** Node.js, Thư viện `mongodb` driver, MongoDB Database Server

---

## 2. Mô tả yêu cầu bài toán
Bài tập yêu cầu sử dụng hàm `aggregate()` và toán tử kết bảng `$lookup` trong MongoDB để liên kết dữ liệu giữa hai collection:
1. **Collection `departments`**: Lưu trữ thông tin các khoa, gồm các trường: `makhoa` và `tenkhoa` (tối thiểu 2 khoa).
2. **Collection `students_join`**: Lưu trữ thông tin sinh viên, gồm các trường: `masv`, `hoten`, và `makhoa` (tối thiểu 4 sinh viên).
3. **Phép kết nối (`$lookup`)**: Liên kết dữ liệu từ collection `students_join` sang `departments` thông qua khóa ngoại chung là `makhoa`.
4. **Hiển thị kết quả**: Sử dụng `$unwind` và `$project` để định dạng lại cấu trúc dữ liệu, đảm bảo danh sách hiển thị ra Terminal đầy đủ thông tin mã sinh viên, họ tên, mã khoa và **tên khoa tương ứng**.

---

## 3. Cấu trúc thư mục dự án
```text
NodeJS/
└── Bai03/
    └── Bt10/
        ├── bai10.js     # Mã nguồn chính thực thi aggregate và \$lookup
        ├── ketqua.png   # Ảnh chụp màn hình kết quả chạy chương trình trên Terminal
        └── Readme.md    # Tài liệu mô tả chi tiết bài tập