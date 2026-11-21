# BÀI TẬP 06: QUẢN LÝ ĐIỂM VÀ XẾP LOẠI SINH VIÊN SỬ DỤNG COMMONJS MODULES
---

## 1. Thông tin chung
- **Học phần:** Lập trình Node.js / Phát triển ứng dụng Web
- **Chương:** Bài 3 — Module, File System và Cơ sở dữ liệu
- **Bài tập:** Bt06 (Tính điểm trung bình và xếp loại học tập sinh viên)
- **Công nghệ sử dụng:** Node.js (CommonJS Module System)

---

## 2. Mô tả yêu cầu bài toán
Bài tập yêu cầu xây dựng một ứng dụng console cơ bản bằng Node.js nhằm thể hiện khả năng phân tách logic chương trình thành các module tái sử dụng được:
1. **Module `xulyDiem.js`**: Đóng gói các hàm logic nghiệp vụ (business logic) gồm:
   - Tính điểm trung bình của 3 môn học (có làm tròn số thập phân chính xác).
   - Xếp loại học lực dựa trên tiêu chuẩn điểm số quy định.
   - Xuất các hàm ra ngoài thông qua cơ chế `module.exports`.
2. **File thực thi `bai06.js`**: 
   - Nạp module nghiệp vụ thông qua hàm `require()`.
   - Khởi tạo tập dữ liệu mẫu gồm 3 sinh viên với các mức điểm khác nhau.
   - Xử lý dữ liệu và định dạng kết quả hiển thị trực quan, rõ ràng trên Terminal.

---

## 3. Tiêu chuẩn xếp loại học tập
Logic xếp loại trong module `xulyDiem.js` được phân chia theo thang điểm 10 như sau:

| Mức điểm trung bình ($DTB$) | Xếp loại học tập | Ghi chú |
| :--- | :--- | :--- |
| $DTB \ge 8.0$ | **Giỏi** | Đạt loại Giỏi |
| $6.5 \le DTB < 8.0$ | **Khá** | Đạt loại Khá |
| $5.0 \le DTB < 6.5$ | **Trung bình** | Đạt loại Trung bình |
| $DTB < 5.0$ | **Yếu** | Cần cố gắng thêm |

---

## 4. Cấu trúc thư mục dự án
```text
NodeJS/
└── Bai03/
    └── Bt06/
        ├── xulyDiem.js    # Module xử lý tính toán điểm và xếp loại học tập
        ├── bai06.js       # File kịch bản chính (Entry point) thực thi ứng dụng
        ├── ketqua.png     # Ảnh chụp màn hình kết quả chạy chương trình trên Terminal
        └── Readme.md      # Tài liệu hướng dẫn chi tiết dự án