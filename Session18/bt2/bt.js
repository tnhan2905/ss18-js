let toan = Number(prompt("Nhập điểm Toán: "));
let van = Number(prompt("Nhập điểm Văn: "));
let anh = Number(prompt("Nhập điểm Anh: "));
let diemTrungBinh =(toan + van + anh)/3;
let xepLoai;
if (diemTrungBinh >= 8.0) {
    xepLoai = "Giỏi";
} else if (diemTrungBinh >= 6.5-7.9) {
    xepLoai = "Khá";
} else if (diemTrungBinh >= 5.0-6.4) {
    xepLoai = "Trung bình";
} else if (diemTrungBinh < 5.0 ) {
    xepLoai = "Yếu";
}
console.log(`Điểm trung bình: ${diemTrungBinh.toFixed(2)}`);
console.log(`Xếp loại học lực: ${xepLoai}`);


