import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as tasksActionCreators from './../../actions/tasksActionCreators'
import { bindActionCreators } from 'redux'

const TaskForm = (props) => {

  const dispatch = useDispatch();

  const { createTask } = bindActionCreators(tasksActionCreators, dispatch)
  return (
    <Formik initialValues={{
      value: '',
      isDone: false,
      deadline: '',
      userId: ''
    }
    }
      onSubmit={(values) => createTask(values)}
    >{
        formik => (
          <Form>
            <Field name='data' />
            <Field name='deadline' />
            <Field name='userId' />
            <button type='submit'>Create task</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default TaskForm;
