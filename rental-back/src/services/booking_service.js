const Booking = require('../models/booking');

class BookingService {
    static async booking_all(){
        const list = await Booking.get_all();
        console.log(list);
        return list;
    }
}

module.exports = BookingService;