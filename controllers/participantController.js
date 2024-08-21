
const Participant = require('../models/Participant');

exports.getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createParticipant = async (req, res) => {
  try {
    const { firstName, lastName, participation } = req.body;

    const participants = await Participant.find();
    const totalParticipation = participants.reduce(
      (total, participant) => total + participant.participation,
      0
    );

    if (totalParticipation + participation > 100) {
      return res.status(400).json({ error: 'Total participation exceeds 100%' });
    }

    const newParticipant = new Participant({ firstName, lastName, participation });
    await newParticipant.save();
    res.json(newParticipant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
