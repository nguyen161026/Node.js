const { MongoClient } = require('mongodb');

// Chuỗi kết nối MongoDB (Localhost cổng mặc định 27017)
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'qlsinhvien';
const collectionName = 'students_test';

async function main() {
    try {
        // 1. Kết nối tới MongoDB Server
        await client.connect();
        console.log("==> Đã kết nối thành công tới MongoDB Server!");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Xóa dữ liệu cũ trong collection trước khi test
        await collection.deleteMany({});

        // 2. Thêm ít nhất 5 sinh viên mẫu
        const danhSachSinhVien = [
            { masv: "SV001", hoten: "Nguyễn Văn An", tuoi: 20, diem: 8.5 },
            { masv: "SV002", hoten: "Trần Thị Bình", tuoi: 21, diem: 7.0 },
            { masv: "SV003", hoten: "Lê Hoàng Cường", tuoi: 20, diem: 4.5 }, // Điểm dưới 5
            { masv: "SV004", hoten: "Phạm Thị Dung", tuoi: 22, diem: 9.0 },
            { masv: "SV005", hoten: "Hoàng Văn Em", tuoi: 19, diem: 3.5 }   // Điểm dưới 5
        ];

        await collection.insertMany(danhSachSinhVien);
        console.log("[Thành công] Đã thêm 5 sinh viên mẫu.");

        console.log("\n---------------------------------------------------------");
        console.log("DANH SÁCH BAN ĐẦU:");
        const allStudentsBefore = await collection.find({}).toArray();
        console.table(allStudentsBefore);

        // 3. Dùng deleteOne() xóa một sinh viên theo mã sinh viên (Ví dụ: SV002)
        const deleteOneResult = await collection.deleteOne({ masv: "SV002" });
        console.log(`\n[deleteOne] Đã xóa ${deleteOneResult.deletedCount} sinh viên có mã 'SV002'.`);

        // 4. Dùng deleteMany() xóa các sinh viên có điểm dưới 5
        const deleteManyResult = await collection.deleteMany({ diem: { $lt: 5 } });
        console.log(`[deleteMany] Đã xóa ${deleteManyResult.deletedCount} sinh viên có điểm dưới 5.`);

        // 5. Hiển thị danh sách còn lại bằng find()
        console.log("\n---------------------------------------------------------");
        console.log("DANH SÁCH SINH VIÊN CÒN LẠI SAU KHI XÓA:");
        const remainingStudents = await collection.find({}).toArray();
        console.table(remainingStudents);
        console.log(`Tổng số sinh viên còn lại: ${remainingStudents.length}`);

    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    } finally {
        await client.close();
        console.log("\n==> Đã ngắt kết nối cơ sở dữ liệu.");
    }
}

main();