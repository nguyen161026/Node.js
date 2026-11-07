const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Thiết lập HTTP Header trả về kiểu nội dung là HTML và hỗ trợ tiếng Việt (UTF-8)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Nội dung trang HTML trả về khi truy cập trang chủ
  res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>Bài tập Node.js HTTP Server</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f6f9; text-align: center; margin-top: 60px; }
            .container { background: #ffffff; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
            h1 { color: #2c3e50; }
            p { font-size: 18px; color: #34495e; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Chào mừng đến với Node.js Server</h1>
            <p>Họ và tên sinh viên: <strong>A Nguyên </strong></p>
            <p>Mã sinh viên: <strong>[CDCNTT18B18]</strong></p>
        </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server đang chạy tại http://${hostname}:${port}/`);
});