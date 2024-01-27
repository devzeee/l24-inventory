const CourierProvider = require('../models/courier.model'); // Adjust the path as needed

exports.addCourierProvider = async (req, res) => {
    try {
        const newCourierProvider = new CourierProvider(req.body);
        const savedCourierProvider = await newCourierProvider.save();
        res.status(201).json(savedCourierProvider);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.getAllCourierProviders = async (req, res) => {
    try {
        const courierProviders = await CourierProvider.find();
        res.json(courierProviders);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.getCourierProviderById = async (req, res) => {
    try {
        const courierProvider = await CourierProvider.findById(req.params.id);
        if (!courierProvider) {
            return res.status(404).json({ message: "Courier provider not found" });
        }
        res.json(courierProvider);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.updateCourierProvider = async (req, res) => {
    try {
        const updatedCourierProvider = await CourierProvider.findByIdAndUpdate(
            req.params.id, req.body, { new: true });
        if (!updatedCourierProvider) {
            return res.status(404).json({ message: "Courier provider not found" });
        }
        res.json(updatedCourierProvider);
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};

exports.deleteCourierProvider = async (req, res) => {
    try {
        const courierProvider = await CourierProvider.findByIdAndDelete(req.params.id);
        if (!courierProvider) {
            return res.status(404).json({ message: "Courier provider not found" });
        }
        res.json({ message: "Courier provider deleted successfully" });
    } catch (error) {
        next(new ErrorHandler(500, error.message));

    }
};
