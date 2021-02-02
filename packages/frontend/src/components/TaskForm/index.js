import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as tasksActionCreators from './../../actions/tasksActionCreators';
import { bindActionCreators } from 'redux';

const TaskForm = (props) => {
  const dispatch = useDispatch();

  const { createTask } = bindActionCreators(tasksActionCreators, dispatch);
  return (
    <Formik initialValues={{
      value: '',
      isDone: false,
      deadline: '',
      userId: ''
    }
    }
      onSubmit={(values) => {
        createTask(values);
      }}
    >{
        formik => (
          <Form>
            <p>User Id <Field name='userId' /></p>
            <p>Task value <Field name='value' /></p>
            <p>Deadline <Field name='deadline' /></p>
            <button type='submit'>Create task</button>
          </Form>
        )
      }
    </Formik>
  );
};

export default TaskForm;
