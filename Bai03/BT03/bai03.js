const fs = require('fs');
const fileName = 'thongtin.txt';

console.log('--- BẮT ĐẦU THỰC HIỆN CÁC THAO TÁC VỚI FILE SYSTEM ---');

// 1. Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên (sử dụng writeFile)
fs.writeFile(fileName, 'Họ tên: Nguyên A\nMã sinh viên: CD_CNTT18B\n', 'utf8', (err) => {
  if (err) throw err;
  console.log('\n[1] Đã tạo và ghi thành công nội dung vào tập tin thongtin.txt');

  // 2. Đọc và hiển thị nội dung tập tin lên Terminal
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\n[2] Nội dung ban đầu của tập tin:');
    console.log(data);

    // 3. Ghi nối thêm tên lớp vào cuối tập tin bằng appendFile()
    fs.appendFile(fileName, 'Lớp: CD_CNTT18B\n', 'utf8', (err) => {
      if (err) throw err;
      console.log('\n[3] Đã ghi nối thêm tên lớp vào cuối tập tin thành công!');

      // 4. Đọc lại tập tin để chứng minh nội dung đã được cập nhật
      fs.readFile(fileName, 'utf8', (err, updatedData) => {
        if (err) throw err;
        console.log('\n[4] Nội dung tập tin sau khi cập nhật (đã nối thêm):');
        console.log(updatedData);
        console.log('--- HOÀN TẤT ---');
      });
    });
  });
});