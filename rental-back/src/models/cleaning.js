class Cleaning {
    property_id;
    checkout_booking_id;
    checkout_booking_date;
    new_booking_id;
    new_booking_date;
    conflict;
    
    constructor(property_id, checkout_booking_id, checkout_booking_date, new_booking_id, new_booking_date, conflict){
        this.property_id =property_id;
        this.checkout_booking_date = checkout_booking_date;
        this.checkout_booking_id = checkout_booking_id;
        this.new_booking_date = new_booking_date;
        this.new_booking_id = new_booking_id;
        this.conflict = conflict;
    }    

}