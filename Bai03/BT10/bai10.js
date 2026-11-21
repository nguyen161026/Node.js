const { MongoClient } = require('mongodb');

// Chuỗi kết nối MongoDB (Localhost cổng mặc định 27017)
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'qlsinhvien';

async function main() {
    try {
        // 1. Kết nối tới MongoDB Server
        await client.connect();
        console.log("==> Đã kết nối thành công tới MongoDB Server!");

        const db = client.db(dbName);
        const departmentsColl = db.collection('departments');
        const studentsColl = db.collection('students_join');

        // Xóa dữ liệu cũ (nếu có) để chạy lại từ đầu sạch sẽ
        await departmentsColl.deleteMany({});
        await studentsColl.deleteMany({});

        // 2. Tạo collection departments gồm ít nhất 2 khoa
        const danhSachKhoa = [
            { makhoa: "CNTT", tenkhoa: "Công nghệ thông tin" },
            { makhoa: "QTKD", tenkhoa: "Quản trị kinh doanh" }
        ];
        await departmentsColl.insertMany(danhSachKhoa);
        console.log("[Thành công] Đã thêm dữ liệu vào collection 'departments'.");

        // 3. Tạo collection students_join gồm ít nhất 4 sinh viên có makhoa liên kết
        const danhSachSinhVien = [
            { masv: "SV01", hoten: "Nguyễn Văn An", makhoa: "CNTT" },
            { masv: "SV02", hoten: "Trần Thị Bình", makhoa: "QTKD" },
            { masv: "SV03", hoten: "Lê Hoàng Cường", makhoa: "CNTT" },
            { masv: "SV04", hoten: "Phạm Thị Dung", makhoa: "QTKD" }
        ];
        await studentsColl.insertMany(danhSachSinhVien);
        console.log("[Thành công] Đã thêm dữ liệu vào collection 'students_join'.");

        // 4. Sử dụng aggregate() kết hợp $lookup để liên kết sinh viên với khoa thông qua makhoa
        console.log("\n---------------------------------------------------------");
        console.log("KẾT QUẢ TRUY VẤN DỮ LIỆU KẾT HỢP (AGGREGATE & $LOOKUP):");
        
        const pipeline = [
            {
                $lookup: {
                    from: "departments",       // Collection cần kết nối
                    localField: "makhoa",      // Trường ở collection students_join
                    foreignField: "makhoa",    // Trường ở collection departments
                    as: "thongTinKhoa"         // Tên trường mảng kết quả trả về
                }
            },
            {
                $unwind: "$thongTinKhoa"       // Chuyển mảng thông tin khoa thành object để dễ xử lý
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: "$thongTinKhoa.tenkhoa" // Lấy ra tên khoa tương ứng
                }
            }
        ];

        const ketQuaJoin = await studentsColl.aggregate(pipeline).toArray();
        
        // Hiển thị danh sách sinh viên kèm tên khoa dưới dạng bảng trực quan
        console.table(ketQuaJoin);

    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    } finally {
        await client.close();
        console.log("\n==> Đã ngắt kết nối cơ sở dữ liệu.");
    }
}

main();