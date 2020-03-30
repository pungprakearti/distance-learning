import React, { Component } from 'react'
import './distanceLearning.scss'

export default class DistanceLearning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        'Daily check-in',
        'Reading 20 minutes, and filling our the reading log',
        'Singing the Phonics Song and reviewing phonic sounds',
        'Completing a Eureka Math lesson',
        'Practicing your math facts(sprint, flash cards, educational app/game)',
        'Counting and/or writing numbers(by 1s, 2s, 5s, or 10s)',
        'Completing a writing activity(journal entry, animal unit writing activity)',
        'Use Lexia, for at least 20-30 minutes',
        'Selecting 1-2 tasks from the included packet'
      ],
      lastComplete: [],
    }

    this.ls = window.localStorage
  }

  componentDidMount() {
    this.getLastComplete()
  }

  getLastComplete = () => {
    let tempTimes = []
    this.state.tasks.map((task, i) => {
      return tempTimes.push(this.getTime(i))
    })
    this.setState({
      lastComplete: [...tempTimes]
    })
  }

  setTime = (e) => {
    let task = e.target.dataset.task
    let hours = Math.floor(Date.now()/1000/60/60)
    this.ls.setItem(`task${task}`, hours)
    this.getLastComplete()
  }

  getTime = (task) => {
    let time = this.ls.getItem(`task${task}`)
    if(time) {
      let diff = time - Math.floor(Date.now()/1000/60/60)
      if(diff === 0) {
        return '< 1h'
      } else {
        return `${diff}h`
      }
    } else {
      return ''
    }
  }

  render () {
    return (
      <div className='DL-tasks'>
        <ul>
          {this.state.tasks.map((task, i) => {
            return (
              <li key={i} className='DL-tasks_Item'>
                <button className='DL-tasks_Button' onClick={this.setTime} data-task={i}>
                  <span className='DL-tasks_Text' data-task={i}>{task}</span>
                  <span className='DL-tasks_Text' data-task={i}>{this.state.lastComplete[i]}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
