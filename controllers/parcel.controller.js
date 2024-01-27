const Parcel = require('../models/parcel.model'); // Adjust the path as needed
const CourierProvider = require('../models/courier.model'); // Adjust the path as needed

exports.addParcel = async (req, res) => {
    try {
        const newParcel = new Parcel({
            ...req.body,
            statusHistory: [{ status: req.body.status }]
        });
        const savedParcel = await newParcel.save();

        // Update totalParcel count in CourierProvider
        await CourierProvider.findByIdAndUpdate(req.body.assignedCourier, {
            $inc: { totalParcel: 1 }
        });

        res.status(201).json(savedParcel);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.getAllParcels = async (req, res) => {
    try {
        const parcels = await Parcel.find().populate('assignedCourier');
        res.json(parcels);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.getParcelById = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id).populate('assignedCourier');
        if (!parcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }
        res.json(parcel);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.updateParcel = async (req, res) => {
    try {
        const updatedParcel = await Parcel.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        if (!updatedParcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }
        res.json(updatedParcel);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.deleteParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findByIdAndDelete(req.params.id);
        if (!parcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }
        res.json({ message: "Parcel deleted successfully" });
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.updateParcelStatus = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }

        parcel.statusHistory.push({
            status: req.body.status,
            timestamp: new Date() // or Date.now()
        });

        const updatedParcel = await parcel.save();
        res.json(updatedParcel);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};
