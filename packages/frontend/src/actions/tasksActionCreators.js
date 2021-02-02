import ACTION_TYPES from './types';

// POST
export const createTask = (data) => ({
  type: ACTION_TYPES.CREATE_TASK,
  data
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST
});

export const createTaskSuccess = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task
});

export const createTaskError = (error) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error
});

// GET
export const getTasks = (params) => ({
  type: ACTION_TYPES.GET_TASKS,
  params
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST
});

export const getTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks
});

export const getTasksError = (error) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error
});

// UPDATE
export const updateTask = (id, data) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  id,
  data
});

export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST
});

export const updateTaskSuccess = (task) => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  task
});

export const updateTaskError = (error) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  error
});

// DELETE
export const deleteTask = (id) => ({
  type: ACTION_TYPES.DELETE_TASK,
  id
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST
});

export const deleteTaskSuccess = (task) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  task
});

export const deleteTaskError = (error) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error
});
