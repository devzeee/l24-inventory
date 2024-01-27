const mongoose = require('mongoose');


const mongoDBUri = "mongodb+srv://devzeee98:Utsavi99@latestop24.rxcdfbv.mongodb.net/l24-inventory";

mongoose.connect(mongoDBUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

module.exports = mongoose;
