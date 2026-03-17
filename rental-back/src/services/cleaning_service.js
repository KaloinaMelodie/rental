const { isValidYYYYMMDD } = require('../utils/util');
const Booking = require('../models/booking');
const Property = require('../models/property');
const Cleaning = require('../models/cleaning');

class CleaningService {
    static async getListCleaning(date) {
        // if format correct
        if (!isValidYYYYMMDD(date)) {
            throw new Error('Date is not in the format YYYY-MM-DD');
        }
        let cleanings = [];
        const properties = await Property.get_all();
        // properties.foreach(async (property) => {
        for (const property of properties) {
            const cleaning = new Cleaning();
            cleaning.property_id = property.property_id;
            const bookings = await Booking.get_by_property_id(property.property_id);
            const valid_checkout_bookings = bookings.filter(booking => (booking.check_out == date) && (booking.status === "confirmed" || booking.status === "checked_in") && booking.status !== "cancelled");
            if (valid_checkout_bookings.length > 0) {
                cleaning.checkout_booking_date = valid_checkout_bookings[0].check_out;
                cleaning.checkout_booking_id = valid_checkout_bookings[0].id;
            } else {
                continue;
            }
            let valid_checkin_bookings = bookings.filter(booking => (booking.check_in >= date) && (booking.status == "confirmed" || booking.status == "checked_in") && booking.status !== "cancelled");
            console.log(valid_checkin_bookings.length + "\n");
            if (valid_checkin_bookings.length > 0) {
                if (valid_checkin_bookings.length > 1) {
                    valid_checkin_bookings = valid_checkin_bookings.sort((a, b) => new Date(a.check_in) - new Date(b.check_in));
                    let hasConflict = false;
                    for (let j = 0; j < valid_checkin_bookings.length; j++) {
                        for (let i = j+1; i < valid_checkin_bookings.length; i ++) {
                            if ((valid_checkin_bookings[i].check_in < valid_checkin_bookings[j].check_out)|| (valid_checkin_bookings[j].check_in < valid_checkin_bookings[i].check_out)) {
                                cleaning.new_booking_date = null;
                                cleaning.new_booking_id = null;
                                cleaning.conflict = true;
                                hasConflict = true;
                                break;
                            }
                        }
                    }
                    if(!hasConflict) {
                        cleaning.new_booking_date = valid_checkin_bookings[0].check_in;
                        cleaning.new_booking_id = valid_checkin_bookings[0].id;
                        cleaning.conflict = false;
                    }
                } else {
                    cleaning.new_booking_date = valid_checkin_bookings[0].check_in;
                    cleaning.new_booking_id = valid_checkin_bookings[0].id;
                    cleaning.conflict = false;
                }
                cleanings.push(cleaning);
            } else {
                cleaning.new_booking_date = null;
                cleaning.new_booking_id = null;
                cleaning.conflict = false;
                cleanings.push(cleaning);
            }

        }
        // });
        return cleanings;
    }
}

module.exports = CleaningService;