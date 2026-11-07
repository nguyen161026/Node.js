const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Thiết lập Header trả về kiểu nội dung là HTML với mã nguồn UTF-8
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Nội dung trang HTML trả về chứa tên sinh viên
  res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>Bài 2 - Node.js HTTP Server</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
            h1 { color: #333; }
            .card { background: white; padding: 20px; border-radius: 8px; display: inline-block; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Chào mừng đến với Node.js HTTP Server!</h1>
            <p>Họ và tên sinh viên: <strong>Nguyên A</strong></p>
            <p>Trạng thái: Máy chủ đang chạy thành công trên cổng 3000</p>
        </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server đang chạy tại http://${hostname}:${port}/`);
});