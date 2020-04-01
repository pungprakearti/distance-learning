import React, { Fragment } from 'react'
import Task from './Task'

const SubTask = ({ mainTask, tasks, taskNum, durationList, handleClick }) => {  
  //get lowest duration and use it on the main task
  //find all not null
  let valids = []
  for(let i = 0; i < tasks.length + 1; i++) {
    if(durationList[`${taskNum}${i}`] !== null) {
      valids.push(i)
    }
  }

  //set starting point
  let lowestNum
  if(valids.length === 1) {
    lowestNum = valids[0]
  } else if(valids.length > 1) {
    lowestNum = valids[0]

    for(let i = 1; i < valids.length; i++) {
      if(durationList[`${taskNum}${valids[i]}`] < durationList[`${taskNum}${lowestNum}`]) {
        lowestNum = valids[i]
      }
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