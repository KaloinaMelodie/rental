const BookingService = require('../services/booking_service');

class BookingController {
    static async booking_all (req, res){
    res.json(await BookingService.booking_all());
    }
}

module.exports = BookingController;