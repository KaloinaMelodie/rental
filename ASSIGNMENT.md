# Assignment Submission

## Overview
This project implements an API endpoint to generate cleaning tasks for properties based on booking checkout dates.

For a given date, the API:
- finds valid bookings checking out on that date
- creates one cleaning task per matching booking
- includes the next valid upcoming booking for the same property, if any
- flags whether the property has overlapping valid bookings

## Tech Stack
- Node.js
- Express
- JavaScript
- JSON file as in-memory data source

## Project Structure
- `app/main.py`: application entry point
- `app/routes/cleaning.py`: cleaning task endpoint
- `app/services/booking_service.py`: booking filtering and task generation logic
- `app/services/conflict_service.py`: overlap/conflict detection
- `data/bookings.json`: input booking dataset

## API
### GET /cleaning-tasks?date=YYYY-MM-DD

Returns the cleaning tasks that must be scheduled for the provided date.

#### Query Parameters
- `date` (required): ISO date in `YYYY-MM-DD` format

#### Success Response
Returns a JSON array of cleaning tasks.
Example:
```json
[
  {
    "property_id": "P1",
    "checkout_booking_id": "B1",
    "checkout_date": "2026-03-18",
    "next_booking_id": "B2",
    "next_checkin_date": "2026-03-20",
    "conflict": false
  }
]
```

#### Validation / Error Response
Return 400 Bad Request if:
date is missing
date is not a valid YYYY-MM-DD date

## Business Logic / Assumptions
- Only bookings with status `confirmed` or `checked_in` are considered valid.
- Bookings with status `cancelled` are ignored.
- A cleaning task is created for each valid booking whose checkout date matches the requested date.
- The next booking is the next valid booking for the same property in chronological order.
- `conflict` means that the property has overlapping valid bookings.
- Same-day checkout and next check-in is allowed and is not considered an overlap.

## How to Run
1. Create a virtual environment
2. Install dependencies
3. Start the server

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Node
```md
## How to Run

```bash
npm install
npm start
```

The API will be available at:
http://localhost:3000

## How to Test
```bash
curl "http://127.0.0.1:8000/cleaning-tasks?date=2026-03-18"
```
Example invalid request:

```bash
curl "http://127.0.0.1:8000/cleaning-tasks?date=invalid-date"
```

## What I Would Improve With More Time
- add more unit tests for edge cases
- persist bookings in a database instead of a JSON file
- add structured logging
- improve input validation and error responses
- expose conflict details for easier debugging

## Notes
Optional section for anything important the reviewer should know.