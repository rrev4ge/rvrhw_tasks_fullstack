import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TasksList = (props) => {

  const {tasks, isFetching, error} = props;
  return (
    <ul>
      {tasks.map(t=><li key={t.id}>{t.data} {t.isDone}</li>)}
    </ul>
  )
}

TasksList.propTypes = {
  props: PropTypes
}

const mapStateToProps = (state) => state.tasks;

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(TasksList)
