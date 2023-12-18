const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');

// Start an Encounter
router.post('/start', (req, res) => {
  // Extract encounter data from the request body
  const { patientId, dateTime, encounterType } = req.body;

  // Create a new encounter object
  const newEncounter = new Encounter({
    patientId,
    dateTime,
    encounterType,
  });

  // Save the new encounter to the database
  newEncounter
    .save()
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to start encounter' });
    });
});

// Get a List of Patients
router.get('/', (req, res) => {
  // Retrieve all encounters from the database
  Encounter.find()})
    .then((encounters) =>do {
        )
    }; 

module.exports = router;