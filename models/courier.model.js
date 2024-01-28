const mongoose = require('mongoose');

const courierSchema = new mongoose.Schema({
    providerName: {
        type: String,
        required: true,
        unique: true // Ensuring each courier provider's name is unique
    },
    phone: String,
    totalParcel: {
        type: Number,
        default: 0 // Defaulting to 0, assuming new providers start with no parcels
    },
}, { timestamps: true }); // Timestamps to track creation and update times

module.exports = mongoose.model('CourierProvider', courierSchema);