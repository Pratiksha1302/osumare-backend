const express = require('express');
const app = express();
const port = 8080;
//for parsing json
app.use(express.json());
//validating and checking server
app.listen(port, () => {
  console.log(`Server is actively running  at localhost:${port}`);
});
//DS to store data
let tasks = [];
let Item_Id = 1;

//Read
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send('Invalid task ID');
    }
    
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).send('Task items not found!!');
    res.json(task);
});
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required!!');
    }
    const newTask = { id: Item_Id++, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task item not found!!');
    
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required!!');
    }
    task.title = title;
    task.description = description;
    res.json(task);
});


// Delete
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Task not found');
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask);
});
  



// middleware Error handling 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
