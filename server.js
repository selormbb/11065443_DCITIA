const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patientsRoutes = require('./routes/patients');
const encountersRoutes = require('./routes/encounters');
const vitalsRoutes = require('./routes/vitals.js');

// Create an instance of the Express application
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/ugmc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api/patients', patientsRoutes);
app.use('/api/encounters', encountersRoutes);
app.use('/api/vitals', vitalsRoutes);
app.use('/api/doctors', doctorsRoutes);

// Start the server
const port = 3000; // Change the port number if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});