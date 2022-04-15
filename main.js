/**
 * Tính tiền lương nhân viên
 * Đầu vào:
 * - Lương 1 ngày: 100.000
 * - số ngày làm: 26
 * - Tổng tiền lương: ?
 * 
 * Xử lý:
 * - Tổng lương = Lương 1 ngày * số ngày làm
 * 
 * Đầu ra:
 * - Tổng tiền lương
 */
var luong1Ngay = 100000;
var soNgayLam = 26;
var tongTienLuong = 0;

tongTienLuong = luong1Ngay * soNgayLam;
console.log("Tổng tiền lương là: " + tongTienLuong);

/**
 * Tính giá trị trung bình của 5 số
 * Đầu vào:
 * - số thứ 1 = 5
 * - số thứ 2 = 10
 * - số thứ 3 = 15
 * - số thứ 4 = 20
 * - số thứ 5 = 25
 * 
 *  Xứ lý:
 * - tổng giá trị = sothu1 + sothu2 + sothu3 + sothu4 + sothu5
 * - trung bình giá trị = tổng giá trị / 5
 * 
 *  Đầu ra:
 * - Trung bình giá trị của 5 số.
 */
var soThu1 = 5;
var soThu2 = 10;
var soThu3 = 15;
var soThu4 = 20;
var soThu5 = 25;

tongGiaTri = soThu1 + soThu2 + soThu3 + soThu4 + soThu5;
trungBinhGiaTri = tongGiaTri / 5;

console.log("Tổng Giá trị trụng bình của 5 số thực là: " + trungBinhGiaTri);

/**
 * Qui đổi tiền USD sang VND
 * Đầu vào:
 * - tỉ giá (USD-VND) = 23500
 * - USD = 200
 * - VND = ?
 * 
 * Xử lý:
 * VND = tỉ giá * USD
 * 
 * Đầu ra:
 * - Tổng qui đổi USD sang VND
 */

var tiGia = 23500;
var USD = 200;
var VND = 0;

VND = tiGia * USD;

console.log("Tồng qui đổi USD snag VND là: " + VND);

/**
 * Tính diện tích và chu vi hình chữ nhật
 * Đầu vào:
 * - Chiều dài = 10
 * - Chiều rộng = 5
 * - Chu vi = ? 
 * - Diện tích = ?
 *
 *  Xử lý:
 * Chu vi = (CD + CR) * 2
 * Diện tích = CD * CR
 * 
 *  Đàu ra:
 * Chu vi HCN
 * Diện tích HCN
 */

var chieuDai = 10;
var chieuRong = 5;
var chuVi = 0;
var dienTich = 0;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi HCN là: " + chuVi);
console.log("Dien tich HCN là: " + dienTich);

/**
 * 
 * n = 21 => 2 + 1 = 3
 * 
 * - Đầu vào:
 *      n = 21
 * - Xử lý:
 *      Tách lấy hàng chục: n / 10
 *      Tách lấy đơn vị: n % 10
 *      hàng chục + đơn vị
 * - Đầu ra: Show kết quả
 */
 var n = 46;
 var hangChuc = n / 10;
 var donVi = n % 10;
 
 var tongKySo = Math.floor(hangChuc + donVi);
 console.log("Tong 3 ky so la: " + tongKySo);
 
 