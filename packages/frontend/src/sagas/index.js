import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, getTaskSaga, updateTaskSaga, deleteTaskSaga } from './tasksSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS, getTaskSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK, deleteTaskSaga);
}
export default rootSaga;
