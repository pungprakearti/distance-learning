import React, { Fragment } from 'react'
import Task from './Task'

const SubTask = ({ mainTask, tasks, taskNum, durationList, handleClick }) => {
  //get lowest duration and use it on the main task
  let lowestNum = 0
  for(let i = 1; i < tasks.length; i++) {
    if(durationList[`${taskNum}${i}`] < durationList[`${taskNum}${lowestNum}`]) {
      lowestNum = i
    }
  }

  return (
    <Fragment>
      <li className='DL-tasks_Item'>
        <Task
          title={mainTask}
          taskNum={taskNum}
          duration={durationList[`${taskNum}${lowestNum}`]}
        />
      </li>
      <ul>
        {tasks.map((task, i) => {
          return (
            <li key={`${taskNum}${i}`} className='DL-tasks_Item'>
              <Task
                title={task}
                taskNum={`${taskNum}${i}`}
                duration={durationList[`${taskNum}${i}`]}
                handleClick={handleClick}
              />
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default SubTask