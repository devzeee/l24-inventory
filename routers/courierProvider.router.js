const express = require('express');
const router = express.Router();
const courierProviderController = require('../controllers/courierProvider.controller');

// POST request to add a new courier provider
router.post('/', courierProviderController.addCourierProvider);

// GET request for all courier providers
router.get('/', courierProviderController.getAllCourierProviders);

// GET request for a single courier provider by ID
router.get('/:id', courierProviderController.getCourierProviderById);

// PUT request to update a courier provider
router.put('/:id', courierProviderController.updateCourierProvider);

// DELETE request to delete a courier provider
router.delete('/:id', courierProviderController.deleteCourierProvider);

module.exports = router;
