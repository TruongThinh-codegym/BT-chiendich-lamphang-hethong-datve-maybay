/**
 * HỆ THỐNG XÁC DUYỆT ĐẶT VÉ - SKYTICKET (LEGACY CODE)
 * Tình trạng: Lỗi Arrow Anti-Pattern (if-else lồng nhau quá sâu).
 */
function verifyBooking(user, flight) {
    let status = "";

    // BAD CODE: 5 tầng điều kiện lồng nhau khiến code phình to sang bên phải
    if (user.isLoggedIn === false) {
        return console.log("Từ chối: Vui lòng đăng nhập để tiếp tục");    
    }
    if (user.hasValidPassport === false) {
        return console.log ("Từ chối: Hộ chiếu không hợp lệ hoặc hết hạn");
    }
    if (user.age <= 18) {
        return console.log ("Từ chối: Khách hàng chưa đủ 18 tuổi");
    }
     if (flight.availableSeats < 0) {
        return console.log ("Từ chối: Chuyến bay đã hết chỗ");
    }
     if (user.accountBalance >= flight.price) {
        return console.log ("Từ chối: Số dư không đủ");
     }
    console.log("Thành công: Đặt vé hợp lệ");
}
// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
const testUser = { isLoggedIn: true, hasValidPassport: true, age: 20, accountBalance: 5000 };
const testFlight = { availableSeats: 5, price: 1000 };
console.log("Kết quả:", verifyBooking(testUser, testFlight));