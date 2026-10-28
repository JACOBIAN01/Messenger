const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());         // allow requests from any app
app.use(express.json()); // read JSON bodies

// our "database": a plain array, reset on restart (starts with a welcome message)
const messages = [
  { id: '0', user: 'Subhadeep', text: 'Welcome to the class! 👋 Say hi!' },
];

// Get all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Add a new message
app.post('/messages', (req, res) => {
  const { user, text } = req.body;
  const message = { id: Date.now().toString(), user, text };
  messages.push(message);
  res.json(message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
