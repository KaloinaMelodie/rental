# rental

- Cleaning return 

property_id
checkout_booking_id
checkout_date
next_booking_id or null
next_checkin_date or null
conflict (true or false)

- GET /cleaning-tasks?date=YYYY-MM-DD
test 400 
date is missing
date is not a valid ISO date in YYYY-MM-DD format

- Conflict
bookingA.check_in < bookingB.check_out
AND
bookingB.check_in < bookingA.check_out


check_in is inclusive
check_out is exclusive for occupancy logic
same-day checkout and next check-in is allowed

# Content
How to run the app
How to call the endpoint
any assumption
