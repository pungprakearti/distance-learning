import React from 'react'

const Task = ({ title, duration, taskNum, handleClick }) => {
  //format duration and set color class
  let cName
  if(duration === 0) {
    duration = ':)'
    cName = 'color__current'
  } else if(duration >= 12) {
    cName = 'color__long'
    duration = `${duration}h`
  } else if(duration >= 4) {
    cName = 'color__medium'
    duration = `${duration}h`
  } else if(duration === null) {
    duration = ''
  } else if(duration) {
    duration = duration + 'h'
    cName = 'color__current'
  }

  return (
    <button
      onClick={handleClick}
      data-task={taskNum}
      className={`DL-tasks_Button ${cName}`}
    >
      <span
        data-task={taskNum}
        className='DL-tasks_ButtonTitle'
      >
        {title}
      </span>
      <span
        data-task={taskNum}
        className='DL-tasks_ButtonDuration'
      >
        {duration}
      </span>
    </button>
  )
}

export default Task