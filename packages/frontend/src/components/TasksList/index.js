import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksActionCreators from './../../actions/tasksActionCreators';

const TasksListItem = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    task: { id, isDone, value, deadline, userId }
  } = props;

  const dispatch = useDispatch();
  const { updateTask } = bindActionCreators(tasksActionCreators, dispatch);

  const changeItem = () => updateTask(id, isDone);
  return (
      <li key={id}>
        <p>taskValue: {value}</p>
        <p>deadline: {deadline}</p>
        <p>user: {userId}</p>
        <label>
          <input type="checkbox" name={isDone} value={!isDone} onChange={ changeItem() } />
          {`IsDone: ${isDone}`}
        </label>
      </li>
  );
};

function TasksList () {
  const { tasks, isFetching, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const { getTasks } = bindActionCreators(tasksActionCreators, dispatch);

  useEffect(() => {
    getTasks();
  }, []);

  return (
      <ul>
        {tasks.map(t => (
          <TasksListItem task={t} key={t.id}/>
        ))}
        {isFetching && <li>Loading...</li>}
        {error && <li>ERROR</li>}
      </ul>
  );
}

export default TasksList;
