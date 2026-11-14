const http = require('http');

// Khởi tạo Web Server sử dụng module http
const server = http.createServer((req, res) => {
  // Thiết lập header chung (hỗ trợ tiếng Việt UTF-8)
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Khối CSS chung cho các trang
  const style = `
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f7f6;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      .card {
        background: #ffffff;
        padding: 30px 40px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 450px;
        width: 100%;
      }
      h1 {
        color: #2c3e50;
        margin-bottom: 20px;
        font-size: 24px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin: 10px 0;
        text-align: left;
        background: #f9f9f9;
        padding: 10px 15px;
        border-radius: 6px;
        border-left: 4px solid #3498db;
      }
      a {
        display: inline-block;
        margin-top: 20px;
        text-decoration: none;
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        border-radius: 6px;
        font-weight: bold;
        transition: background 0.3s ease;
      }
      a:hover {
        background-color: #2980b9;
      }
    </style>
  `;

  // Xử lý các tuyến đường (routes)
  if (req.url === '/') {
    res.writeHead(200);
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>Trang Chủ</title>
        ${style}
      </head>
      <body>
        <div class="card">
          <h1>Trang Chủ</h1>
          <p>Xin chào! Chào mừng bạn đến với ứng dụng Web Server Node.js của tôi.</p>
          <p><b>Họ và tên:</b> A Nguyên</p>
          <p><b>Mã sinh viên / Lớp:</b> CD_CNTT18B</p>
          <a href="/about">Xem trang giới thiệu</a>
        </div>
      </body>
      </html>
    `);
  } 
  else if (req.url === '/about') {
    res.writeHead(200);
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>Giới thiệu bản thân</title>
        ${style}
      </head>
      <body>
        <div class="card">
          <h1>Giới thiệu bản thân</h1>
          <p><b>Họ và tên:</b> A Nguyên</p>
          <p><b>Lớp:</b> CD_CNTT18B</p>
          <p><b>Ngành học:</b> Công nghệ Thông tin</p>
          <p><b>Trường:</b> Trường Cao đẳng Kỹ thuật Công nghệ Nha Trang</p>
          <a href="/">Quay lại Trang Chủ</a>
        </div>
      </body>
      </html>
    `);
  } 
  else {
    // Trường hợp đường dẫn không tồn tại -> Trả về mã 404
    res.writeHead(404);
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>404 Not Found</title>
        ${style}
      </head>
      <body>
        <div class="card">
          <h1 style="color: #e74c3c;">404 Not Found</h1>
          <p style="border-left-color: #e74c3c;">Đường dẫn bạn truy cập không tồn tại trên hệ thống.</p>
          <a href="/" style="background-color: #e74c3c;">Về Trang Chủ</a>
        </div>
      </body>
      </html>
    `);
  }
});

// Lắng nghe tại cổng 3000 (hoặc thay đổi thành 3001 nếu cổng 3000 bị chiếm)
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});