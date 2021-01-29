import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tasksActionCreators from './../../actions/tasksActionCreators'


const Task = (props) => {
    const {
      task: {id, value, deadline, userId,},
    } = props;
  
    return (
      <li key={id}>
        <p>taskValue: {value}</p>
        <p>deadline: {deadline}</p>
        <p>user: {userId}</p>
      </li>
    );
  }
  
  function TasksList() {
    const {tasks, isFetching, error} = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const {getTasks} = bindActionCreators(tasksActionCreators, dispatch);
  
    useEffect (() => {
      getTasks();
    }, []);
  
    return (
      <ul>
        {tasks.map(t => (
          <Task task={t} />
        ))}
        {isFetching && <li>Loading...</li>}
        {error && <li>ERROR</li>}
      </ul>
    );
  }
  
  export default TasksList;
