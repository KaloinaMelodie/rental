const express = require('express');

const app = express();

app.use('/booking', require('./routes/booking_route'));
app.use('/cleaning', require('./routes/cleaning_route'));

app.listen(3000,()=>{
    console.log('listen on port 3000');
});