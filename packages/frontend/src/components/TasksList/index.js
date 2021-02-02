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
  const { updateTask, deleteTask } = bindActionCreators(tasksActionCreators, dispatch);

  return (
      <li key={id}>
        <p>Task: {value}</p>
        <p>
          <>deadline: {deadline} </>
          <>user: {userId} </>
          <label>
          <input type="checkbox" name="isDone" defaultChecked={isDone} onClick={
            () => {
              updateTask(id, { isDone: !isDone });
            } } />
          {`IsDone: ${isDone}`}
          </label> {}
        <button onClick={
            () => {
              deleteTask(id);
            } }>Remove task</button>
        </p>
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
