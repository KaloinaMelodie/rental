const fs = require('fs/promises');
const Booking = require('./booking');

class Property {
    constructor(id){
        this.property_id = id;
    }

    static async get_all(){
    try {                
                const bookings= await Booking.get_all();                
                let properties = bookings.map(
                    booking => booking.property_id
                );
                properties = [... new Set(properties)];
                return properties.map(id => new Property(id));
            } catch (err) {
                console.error(err);
                return [];
            }
    }
}

module.exports = Property;