import { put } from 'redux-saga/effects';
import { createTaskError, createTaskRequest, createTaskSuccess, getTasksError, getTasksRequest, getTasksSuccess, updateTaskError, updateTaskRequest, updateTaskSuccess } from '../actions/tasksActionCreators';
import * as API from './../api';

export function * createTaskSaga ({ data }) {
  yield put(createTaskRequest());

  try {
    const { data: task } = yield API.createTask(data);
    yield put(createTaskSuccess(task));
  } catch (error) {
    yield put(createTaskError(error));
  }
}

export function * updateTaskSaga ({ id, data }) {
  yield put(updateTaskRequest());

  try {
    const { data: task } = yield API.updateTask(id, data);
    yield put(updateTaskSuccess(task));
  } catch (error) {
    yield put(updateTaskError(error));
  }
}

export function * getTaskSaga () {
  yield put(getTasksRequest());

  try {
    const { data: tasks } = yield API.getTasks();
    yield put(getTasksSuccess(tasks));
  } catch (error) {
    yield put(getTasksError(error));
  }
}
