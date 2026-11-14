const { MongoClient } = require('mongodb');

// URL kết nối tới MongoDB đang chạy cục bộ (Localhost)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Tên Database và Collection theo yêu cầu bài tập
const dbName = 'qlsinhvien';
const collectionName = 'students';

async function main() {
    try {
        // 1. Kết nối MongoDB
        await client.connect();
        console.log('✅ Đã kết nối thành công đến MongoDB!');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 2. Thêm ít nhất 3 sinh viên bằng insertMany()
        const studentsData = [
            { masv: 'SV001', hoten: 'Nguyen Van An', tuoi: 20, diem: 8.5 },
            { masv: 'SV002', hoten: 'Tran Thi Binh', tuoi: 21, diem: 7.8 },
            { masv: 'SV003', hoten: 'Le Van Cuong', tuoi: 22, diem: 9.0 }
        ];

        // Xóa dữ liệu cũ nếu chạy lại nhiều lần để tránh trùng lặp masv (tùy chọn)
        await collection.deleteMany({});

        const insertResult = await collection.insertMany(studentsData);
        console.log(`📌 Đã thêm thành công ${insertResult.insertedCount} sinh viên.`);

        // 3. Sử dụng find() hiển thị danh sách sinh viên
        console.log('\n📋 DANH SÁCH SINH VIÊN TRONG DATABASE:');
        const studentsList = await collection.find({}).toArray();
        
        studentsList.forEach((student, index) => {
            console.log(`${index + 1}. Mã SV: ${student.masv} | Họ tên: ${student.hoten} | Tuổi: ${student.tuoi} | Điểm: ${student.diem}`);
        });

    } catch (error) {
        console.error('❌ Lỗi xảy ra:', error);
    } finally {
        // 4. Đóng kết nối sau khi hoàn thành
        await client.close();
        console.log('\n🔒 Đã đóng kết nối MongoDB.');
    }
}

main();