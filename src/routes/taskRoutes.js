const express = require('express');
const auth = require('../middleware/auth');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');

const routes = express.Router();
routes.post('/', auth, createTask);
routes.get('/', auth, getTasks);
routes.get('/:id', auth, getTask);
routes.put('/:id', auth, updateTask);
routes.delete('/:id', auth, deleteTask);

module.exports = routes;
