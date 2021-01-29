import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
}

function tasksReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {

    case ACTION_TYPES.GET_TASKS_REQUEST:
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: false
      }
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task } = action;

      return {
        ...state,
        tasks: [...state.tasks, task],
        isFetching: true
      }
    }

    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action

      return {
        ...state,
        tasks: tasks,
        isFetching: true
      }
    }

    case ACTION_TYPES.GET_TASKS_ERROR:
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { error } = action;

      return {
        ...state,
        isFetching: true,
        error
      }
    }

    default: {
      return state;
    }
  }
}

export default tasksReducer;