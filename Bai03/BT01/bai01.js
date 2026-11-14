// Sử dụng class và constructor để biểu diễn sinh viên
class Student {
  constructor(id, name, age, score) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.score = score;
  }
}

// Khai báo danh sách 5 sinh viên với tên đầy đủ
const students = [
  new Student("SV01", "Nguyễn Văn An", 20, 8.5),
  new Student("SV02", "Trần Thị Mai", 21, 4.2),
  new Student("SV03", "Lê Hoàng Long", 22, 6.0),
  new Student("SV04", "Phạm Thị Thu Hà", 20, 3.5),
  new Student("SV05", "Hoàng Đức Minh", 21, 7.8)
];

// Sử dụng arrow function để lọc sinh viên có điểm từ 5 trở lên
const filteredStudents = students.filter(student => student.score >= 5);

// Hiển thị danh sách sinh viên đạt yêu cầu
console.log("Danh sách sinh viên đạt điểm từ 5 trở lên:");
console.table(filteredStudents);