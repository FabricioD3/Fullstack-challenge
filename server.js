
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const participantRoutes = require('./routes/participantRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/participants', {
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api/participants', participantRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
