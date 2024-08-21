
const express = require('express');
const { getAllParticipants, createParticipant } = require('../controllers/participantController');

const router = express.Router();

router.get('/', getAllParticipants);
router.post('/', createParticipant);

module.exports = router;
