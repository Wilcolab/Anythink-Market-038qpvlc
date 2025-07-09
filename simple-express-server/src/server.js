const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (typeof text === 'string') {
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Invalid task format' });
  }
});

app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});