const express = require('express');
const router = express.Router();
const parcelController = require('../controllers/parcel.controller');

// POST request to add a new parcel
router.post('/', parcelController.addParcel);

// GET request for all parcels
router.get('/', parcelController.getAllParcels);

// GET request for a single parcel by ID
router.get('/:id', parcelController.getParcelById);

// PUT request to update a parcel
router.put('/:id', parcelController.updateParcel);

// DELETE request to delete a parcel
router.delete('/:id', parcelController.deleteParcel);

// PUT request to update a parcel's status
router.put('/:id/status', parcelController.updateParcelStatus);

module.exports = router;
