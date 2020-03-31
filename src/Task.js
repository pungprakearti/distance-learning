import React from 'react'

const Task = ({ title, duration, taskNum, handleClick }) => {
  if(duration === 0) {
    duration = '< 1h'
  } else {
    duration = `${duration}h`
  }

  return (
    <button onClick={handleClick} data-task={taskNum} className='DL-tasks_Button'>
      <span data-task={taskNum}>{title}</span>
      <span data-task={taskNum}>{duration}</span>
    </button>
  )
}

export default Task