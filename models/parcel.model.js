const mongoose = require('mongoose');


const parcelStatusSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['in', 'out', 'collected'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    // Additional details like who updated the status, if needed
});


const parcelSchema = new mongoose.Schema({
    barcode: {
        type: String,
        required: true,
        unique: true,
    },
    customerName: {
        type: String
    },
    assignedCourier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courier'
    },
    parcelType: {
        type: String,
        enum: ['drop-off', 'pick-up'],
    },
    statusHistory: [parcelStatusSchema]
}, {timestamps: true});

module.exports = mongoose.model('parcel', parcelSchema);

