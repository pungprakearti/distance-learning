import React, { Component } from 'react'
import Task from './Task'
import SubTask from './SubTask'
import './distanceLearning.scss'

export default class DistanceLearning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: {}
    }

    this.ls = window.localStorage
    this.tasks = [
      ['Daily check-in'],
      ['Reading 20 minutes, and filling out the reading log'],
      ['Singing the Phonics Song and reviewing phonic sounds'],
      ['Completing a Eureka Math lesson'],
      ['Practicing your math facts', ['sprint', 'flash cards', 'Zearn']],
      ['Counting and/or writing numbers', ['1s', '2s', '5s', '10s']],
      ['Completing a writing activity',['journal entry', 'animal unit writing activity']],
      ['Use Lexia, for at least 20-30 minutes'],
      ['Selecting 1-2 tasks from the included packet'],
      ['P. E.'],
      ['Brain break']
    ]
  }

  componentDidMount() {
    this.getDuration()

    //refresh every hour
    this.interval = setInterval(this.getDuration, 60*60*1000)
  }

  //populate this.state.duration from local storage
  getDuration = () => {
    let listNums = []
    for(let i = 0; i < this.tasks.length; i++) {
      listNums.push(i)
      if(this.tasks[i].length > 1) {
        for(let j = 0; j < this.tasks[i][1].length; j++) {
          listNums.push(`${i}${j}`)
        }
      }
    }

    let tempTimes = {}
    listNums.map((taskNum) => {
      return tempTimes[taskNum] = (this.getTime(taskNum))
    })

    this.setState({
      duration: {...tempTimes}
    })
  }

  //set the current time for the task and save in local storage
  setTime = (e) => {
    let task = e.target.dataset.task
    let hours = Math.floor(Date.now()/1000/60/60)
    this.ls.setItem(`task${task}`, hours)
    this.getDuration()
  }

  //get the time duration since last set from local storage
  getTime = (task) => {
    let time = this.ls.getItem(`task${task}`)
    if(time) {
      let diff = Math.floor(Date.now()/1000/60/60) - time
      return diff
    } else {
      return null
    }
  }

  render () {
    return (
      <ul className='DL-tasks'>
        {this.tasks.map((task, i) => {
          let mainTask = (
            <li className='DL-tasks_Item' key={i}>
              <Task
                title={task[0]}
                duration={this.state.duration[i]}
                taskNum={i}
                handleClick={this.setTime}
              />
            </li>
          )
          if(task.length > 1) {
            return (
              <SubTask
                mainTask={task[0]}
                tasks={task[1]}
                taskNum={i}
                durationList={this.state.duration}
                handleClick={this.setTime}
                key={i}
              />
            )
          } else {
            return (
              mainTask
            )
          }
        })}
      </ul>
    )
  }
}
