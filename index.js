
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
require('dotenv').config();
const db = require('./configs/db')
const courierProviderRoutes = require('./routers/courierProvider.router'); // Adjust the path as needed
const parcelRoutes = require('./routers/parcel.router'); // Adjust the path as needed
const errorMiddleware = require('./middlewares/errorMiddleware');
// const ErrorHandler = require('./handlers/errorHandler');

app.use(cors());

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Use the routers
app.use('/api/courierProviders', courierProviderRoutes);
app.use('/api/parcels', parcelRoutes);

app.get('/', (req, res) => {
   res.send('hello from simple server')
})

// Error handling middleware should be the last piece of middleware
app.use(errorMiddleware);

app.listen(port, () => console.log('> Server is up and running on port : ' + `http://localhost:${port}`))