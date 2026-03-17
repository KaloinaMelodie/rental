const { isValidYYYYMMDD } = require('../utils/util');
const Booking = require('../models/booking');
const Property = require('../models/property');

class CleaningService {
    static async getListCleaning(date) {
        // if format correct
        // if (!isValidYYYYMMDD(date)) {
        //     throw new Error('Date is not in the format YYYY-MM-DD');
        // }
        let cleanings = [];
        const request_date = new Date(date);
        const properties = await Property.get_all();
        console.log(properties);
        // properties.foreach(async (property) => {
        for (const property of properties) {
            const cleaning = new Cleaning();
            const bookings = await Booking.get_by_property_id(property.property_id);
            const valid_checkout_bookings = bookings.filter(booking => (new Date(booking.check_out) == request_date) && (booking.status == "confirmed" || booking.status == "checked_in") && booking_status != "cancelled");
            if (valid_checkouts.length > 0) {
                cleaning.checkout_booking_date = valid_checkout_bookings[0].check_out;
                cleaning.checkout_booking_id = valid_checkout_bookings[0].id;
            }

            const valid_checkin_bookings = bookings.filter(booking => (new Date(booking.check_in) >= request_date) && (booking.status == "confirmed" || booking.status == "checked_in") && booking_status != "cancelled");

            if (valid_checkin_bookings.length > 0) {
                if (valid_checkin_bookings.length > 1) {
                    cleaning.checkin_booking_date = null;
                    cleaning.checkin_booking_id = null;
                    cleaning.conflict = true;
                } else {
                    cleaning.checkin_booking_date = valid_checkin_bookings[0].check_in;
                    cleaning.checkin_booking_id = valid_checkin_bookings[0].id;
                    cleaning.conflict = false;
                }
                cleanings.push(cleaning);
            }

        }
        // });
        return cleanings;
    }
}

module.exports = CleaningService;