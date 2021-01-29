import { put } from 'redux-saga/effects';
import { createTaskError, createTaskRequest, createTaskSuccess, getTasksError, getTasksRequest, getTasksSuccess } from '../actions/tasksActionCreators';
import * as API from '../api';

export function* createTaskSaga(data){
  yield put(createTaskRequest())

  try {
    const {data:{data:task}} = yield API.createTask(data)
    yield put(createTaskSuccess(task))
  }
  catch(error){
    yield put(createTaskError(error))
  }
}

export function* getTaskSaga() {
  yield put(getTasksRequest())

  try {
    const { data: { data: tasks } } = yield API.getTasks()
    yield put(getTasksSuccess(tasks))
  }
  catch (error) {
    yield put(getTasksError(error))
  }
}
