const http = require('http');
const { URL } = require('url');

const PORT = 3001;

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.searchParams;

    // 0. Xử lý trang chủ (Root /) - Giao diện HTML/CSS hiện đại, đẹp mắt
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Node.js Web Server - Bài 07</title>
                <style>
                    * { box-sizing: border-box; margin: 0; padding: 0; }
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #333;
                    }
                    .card {
                        background: rgba(255, 255, 255, 0.9);
                        padding: 40px;
                        border-radius: 16px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                        max-width: 550px;
                        width: 100%;
                        text-align: center;
                        backdrop-filter: blur(10px);
                    }
                    h1 { color: #4a3f8f; margin-bottom: 15px; font-size: 24px; }
                    p { color: #666; margin-bottom: 25px; font-size: 15px; }
                    .routes {
                        text-align: left;
                        background: #f8f9fa;
                        padding: 20px;
                        border-radius: 10px;
                        border-left: 5px solid #667eea;
                        margin-bottom: 25px;
                    }
                    .routes h3 { margin-bottom: 10px; color: #333; font-size: 16px; }
                    .routes ul { list-style: none; }
                    .routes li { margin-bottom: 10px; }
                    .routes a {
                        color: #007bff;
                        text-decoration: none;
                        font-weight: 600;
                        transition: color 0.2s;
                    }
                    .routes a:hover { color: #0056b3; text-decoration: underline; }
                    .footer { font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 15px; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>🚀 Chào mừng đến với Web Server Node.js!</h1>
                    <p>Hệ thống xử lý định tuyến và tham số URL (Bài tập 07 - Lập trình Node.js)</p>
                    
                    <div class="routes">
                        <h3>📌 Các đường dẫn (Endpoint) hỗ trợ:</h3>
                        <ul>
                            <li>👉 Chào hỏi: <a href="/hello?name=Minh" target="_blank">/hello?name=Minh</a></li>
                            <li>👉 Tính tổng: <a href="/sum?a=10&b=20" target="_blank">/sum?a=10&b=20</a></li>
                        </ul>
                    </div>

                    <div class="footer">
                        Trạng thái: Server đang hoạt động ổn định tại cổng <strong>3001</strong>
                    </div>
                </div>
            </body>
            </html>
        `);
        return;
    }

    // 1. Xử lý Route: /hello
    if (pathname === '/hello') {
        const name = query.get('name');
        
        if (!name || name.trim() === '') {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Lỗi: Thiếu tham số "name". Ví dụ: /hello?name=Minh');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Xin chào ${name}`);
    } 
    // 2. Xử lý Route: /sum
    else if (pathname === '/sum') {
        const aStr = query.get('a');
        const bStr = query.get('b');

        if (aStr === null || bStr === null || aStr.trim() === '' || bStr.trim() === '') {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Lỗi: Thiếu tham số "a" hoặc "b". Ví dụ: /sum?a=10&b=20');
            return;
        }

        const a = Number(aStr);
        const b = Number(bStr);

        if (isNaN(a) || isNaN(b)) {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Lỗi: Giá trị của "a" hoặc "b" phải là số hợp lệ!');
            return;
        }

        const sum = a + b;
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Tổng = ${sum}`);
    } 
    // 3. Xử lý các đường dẫn không tồn tại khác (404)
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found: Đường dẫn không hợp lệ.');
    }
});

// Khởi động Server lắng nghe tại cổng 3001
server.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});