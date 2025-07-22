const express = require('express');
const Donor = require('../models/Donor');
const router = express.Router();

// @route   POST /api/donors
// @desc    Register a new donor
router.post('/', async (req, res) => {
  try {
    const { name, bloodGroup, age, contact, city, lastDonationDate } = req.body;

    const newDonor = new Donor({
      name,
      bloodGroup,
      age,
      contact,
      city,
      lastDonationDate
    });

    await newDonor.save();
    res.status(201).json({
      message: 'Donor registered successfully!',
      donor: newDonor
    });
  } catch (error) {
    console.error('❌ Error registering donor:', error.message);
    res.status(500).json({ message: 'Error registering donor', error: error.message });
  }
});

// (Optional) @route   GET /api/donors
// @desc    Get all donors (for leaderboard or dashboard)
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch donors', error: error.message });
  }
});

module.exports = router;


// Get all donors (for dashboard or leaderboard)
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find().sort({ points: -1 });
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donors', error });
  }
});

module.exports = router;
