const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store items
let items = [];

// GET endpoint to retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
});

// POST endpoint to create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// GET endpoint to retrieve an item by ID
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// PUT endpoint to update an item by ID
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === itemId);
    if (index !== -1) {
        items[index] = { ...items[index], ...req.body };
        res.json(items[index]);
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE endpoint to remove an item by ID
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(i => i.id !== itemId);
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
