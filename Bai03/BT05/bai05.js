const { MongoClient } = require('mongodb');

// URL kết nối tới MongoDB local
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'qlsinhvien';
const collectionName = 'students';

async function main() {
    try {
        // 1. Kết nối đến MongoDB
        await client.connect();
        console.log('✅ Đã kết nối thành công đến MongoDB!');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 2. Tìm sinh viên có điểm >= 7 bằng find() và $gte, sắp xếp giảm dần theo điểm bằng sort({ diem: -1 })
        console.log('\n🔍 DANH SÁCH SINH VIÊN CÓ ĐIỂM >= 7 (Sắp xếp giảm dần theo điểm):');
        const query = { diem: { $gte: 7 } };
        const sortedStudents = await collection.find(query).sort({ diem: -1 }).toArray();

        if (sortedStudents.length === 0) {
            console.log('Không tìm thấy sinh viên nào thỏa mãn điều kiện.');
        } else {
            sortedStudents.forEach((student, index) => {
                console.log(`${index + 1}. Mã SV: ${student.masv} | Họ tên: ${student.hoten} | Điểm: ${student.diem}`);
            });
        }

        // 3. Cập nhật điểm của một sinh viên theo masv bằng updateOne() và $set
        // Ví dụ: Cập nhật điểm của sinh viên có mã 'SV002' thành 9.5
        const targetMasv = 'SV002';
        const newScore = 9.5;

        console.log(`\n✏️ Đang cập nhật điểm cho sinh viên mã [${targetMasv}] thành ${newScore}...`);
        const updateResult = await collection.updateOne(
            { masv: targetMasv },
            { $set: { diem: newScore } }
        );

        if (updateResult.modifiedCount > 0) {
            console.log('✅ Cập nhật điểm thành công!');
        } else {
            console.log('⚠️ Không tìm thấy sinh viên hoặc điểm mới trùng với điểm cũ.');
        }

        // 4. Hiển thị lại toàn bộ danh sách để kiểm tra kết quả sau cập nhật
        console.log('\n📋 DANH SÁCH TẤT CẢ SINH VIÊN SAU KHI CẬP NHẬT:');
        const allStudents = await collection.find({}).toArray();
        
        allStudents.forEach((student, index) => {
            console.log(`${index + 1}. Mã SV: ${student.masv} | Họ tên: ${student.hoten} | Tuổi: ${student.tuoi} | Điểm: ${student.diem}`);
        });

    } catch (error) {
        console.error('❌ Lỗi xảy ra:', error);
    } finally {
        // 5. Đóng kết nối
        await client.close();
        console.log('\n🔒 Đã đóng kết nối MongoDB.');
    }
}

main();