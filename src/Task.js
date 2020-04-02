import React from 'react'

const Task = ({ title, duration, taskNum, handleClick }) => {
  //format duration and set color class
  let cName
  if(duration === 0) {
    cName = 'color__current'
    duration = ':)'
  } else if(duration >= 24) {
    cName = 'color__long'
    duration = `${duration}h`
  } else if((duration >= 8) && (duration < 24)) {
    cName = 'color__medium'
    duration = `${duration}h`
  } else if(!duration) {
    cName = ''
    duration = ''
  } else if(duration) {
    cName = 'color__current'
    duration = duration + 'h'
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