import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null
};

function tasksReducer (state = initialState, action) {
  const { type, tasks, task, error } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST:
    case ACTION_TYPES.GET_TASKS_REQUEST:
    case ACTION_TYPES.UPDATE_TASK_REQUEST:
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }

    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: [...state.tasks, task],
        isFetching: false,
        error: null
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: tasks,
        isFetching: false,
        error: null
      };
    }
    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === task.id ? { ...t, ...task } : t
        ),
        isFetching: false,
        error: null
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      return {
        ...state,
        tasks: state.tasks.filter(t =>
          t.id !== task.id
        ),
        isFetching: false,
        error: null
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR:
    case ACTION_TYPES.GET_TASKS_ERROR:
    case ACTION_TYPES.UPDATE_TASK_ERROR:
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      return {
        ...state,
        isFetching: false,
        error
      };
    }

    default: {
      return state;
    }
  }
}

export default tasksReducer;
