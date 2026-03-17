const BookingService = require('../services/booking_service');

class BookingController {
    static async booking_all (req, res){
    res.json({success: 200, data: await BookingService.booking_all()});
    }
}

module.exports = BookingController;