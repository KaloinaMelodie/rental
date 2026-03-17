const express = require('express');
const { errorHandler } = require('./middleware/error-handler');

const app = express();

app.use('/booking', require('./routes/booking_route'));
app.use('/cleaning', require('./routes/cleaning_route'));

app.use(errorHandler);

app.listen(3000,()=>{
    console.log('listen on port 3000');
});