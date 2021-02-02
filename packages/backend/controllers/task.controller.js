const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  console.log('body :>> ', body);
  try {
    const createdTask = await Task.create(body);
    console.log('createdTask :>> ', createdTask.get());
    res.status(201).send(createdTask.get());
  } catch (err) {
    next(err);
  }
};

module.exports.getTask = async (req, res, next) => {
  const { params: { taskId } } = req;
  try {
    const foundTask = await Task.findByPk(taskId);
    if (foundTask) {
      return res.status(200).send(foundTask);
    }
    res.status(404).send('The task not found');
  } catch (err) {
    next(err);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const foundTasks = await Task.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
    console.log('foundTasks :>> ', foundTasks);
    res.status(200).send(foundTasks);
  } catch (err) {
    next(err);
  }
};
module.exports.updateTask = async (req, res, next) => {
  const {
    body, params: { taskId }
  } = req;
  try {
    const foundTask = await Task.findByPk(taskId, { attributes: { exclude: ['createdAt', 'updatedAt'] } });
    // console.log('foundTask :>> ', foundTask);
    if (foundTask) {
      const updatedTask = await foundTask.update(body, { attributes: { exclude: ['createdAt', 'updatedAt'] } });
      // console.log(updatedTask);
      return res.status(200).send(updatedTask);
    }
    res.status(404).send('The task not found');
  } catch (err) {
    next(err);
  }
};
module.exports.removeTask = async (req, res, next) => {
  const { params: { taskId } } = req;
  try {
    const foundTask = await Task.findByPk(taskId, { attributes: { exclude: ['createdAt', 'updatedAt'] } });
    if (foundTask) {
      await foundTask.destroy();
      return res.status(200).send(foundTask);
    }
    return res.status(404).send('Task not found');
  } catch (err) {
    next(err);
  }
};
