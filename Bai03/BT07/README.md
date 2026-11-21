# BÀI TẬP 07: XÂY DỰNG WEB SERVER VỚI MODULE HTTP VÀ URL TRONG NODE.JS
---

## 1. Thông tin chung
- **Học phần:** Lập trình Node.js / Phát triển ứng dụng Web
- **Chương:** Bài 3 — Module, File System và Cơ sở dữ liệu
- **Bài tập:** Bt07 (Xây dựng Web Server xử lý định tuyến và tham số URL)
- **Công nghệ sử dụng:** Node.js (`http` module, `url` module với lớp chuẩn `URL`)

---

## 2. Mô tả yêu cầu bài toán
Bài tập yêu cầu xây dựng một ứng dụng Web Server thuần (Vanilla Node.js) nhằm làm rõ cơ chế xử lý HTTP Request/Response cốt lõi trong Node.js:
1. **Khởi tạo Server**: Lắng nghe các kết nối mạng tại cổng định mức **`3001`**.
2. **Xử lý định tuyến (Routing)**: Phân rã đường dẫn (`pathname`) từ URL để điều hướng yêu cầu:
   - Endpoint `/`: Hiển thị trang hướng dẫn sử dụng các chức năng của server.
   - Endpoint `/hello`: Nhận tham số truy vấn `name` và trả về lời chào tương ứng (Ví dụ: `Xin chào Minh`).
   - Endpoint `/sum`: Nhận hai tham số số học `a` và `b`, thực hiện phép tính cộng và trả về kết quả (`Tổng = 30`).
3. **Cơ chế kiểm tra và xử lý lỗi (Validation & Error Handling)**:
   - Trả về mã lỗi chuẩn HTTP `400 Bad Request` kèm thông báo chi tiết khi người dùng thiếu tham số bắt buộc hoặc truyền sai kiểu dữ liệu số.
   - Trả về mã lỗi chuẩn HTTP `404 Not Found` khi truy cập vào các đường dẫn không tồn tại trên hệ thống.

---

## 3. Sơ đồ luồng xử lý yêu cầu (Request Flow)

```text
[ Client / Browser ] 
       │ (Gửi HTTP Request: GET /hello?name=Minh)
       ▼
[ Node.js HTTP Server (Port 3001) ]
       │
       ├─► Phân tích URL bằng `new URL(req.url, base)`
       │      ├── Lấy `pathname` ("/", "/hello", hoặc "/sum")
       │      └── Lấy `searchParams` (Các query parameters)
       │
       ├─► Kiểm tra Route / Pathname:
       │      ├── Nếu là `/`      ──► HTTP 200 (Hiển thị trang hướng dẫn)
       │      ├── Nếu là `/hello` ──► Kiểm tra tham số `name`
       │      │                         ├── Thiếu ──► HTTP 400 (Lỗi thiếu tham số)
       │      │                         └── Đủ    ──► HTTP 200 (Trả về "Xin chào [name]")
       │      │
       │      ├── Nếu là `/sum`   ──► Kiểm tra tham số `a` & `b`
       │      │                         ├── Thiếu / Sai kiểu ──► HTTP 400 (Lỗi dữ liệu)
       │      │                         └── Hợp lệ           ──► HTTP 200 (Trả về "Tổng = [a + b]")
       │      │
       │      └── Đường dẫn khác ──► HTTP 404 (Not Found)
       │
       ▼
[ Phản hồi HTTP Response trả về Client ]