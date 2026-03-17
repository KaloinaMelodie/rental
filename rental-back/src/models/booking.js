const fs = require('fs/promises');
class Booking {        
    constructor(id, property_id,check_in, check_out, status){
        this.id = id,
        this.property_id = property_id,
        this.check_in = check_in,
        this.check_out = check_out,
        this.status = status
    }

    static async get_all(){
        try {
            const data = await fs.readFile('./src/data/bookings.json', 'utf-8');
            const bookings= JSON.parse(data);
            return bookings.map(
                booking => new Booking(
                    booking.id,
                    booking.property_id,
                    booking.check_in,
                    booking.check_out,
                    booking.status
                )
            );
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async get_by_property_id(id){
        const bookings = await this.get_all();                
        return bookings.filter(booking => booking.property_id == id);
    }
}

module.exports = Booking;