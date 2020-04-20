import React, { Component } from 'react'
import TaskList from './TaskList'
import './selector.scss'

export default class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 0,
      loaded: false
    }
    this.ls = window.localStorage
  }

  //show preferred task list on load or default to first list
  componentDidMount() {
    const preferred = this.ls.getItem('preferredTaskList')
    if(!preferred) {
      this.setState({
        show: 0,
        loaded: true
      })
    } else {
      this.setState({
        show: preferred,
        loaded: true
      })
    }
  }

  //toggle which list is shown
  handleSelect = (e) => {
    e.preventDefault()
    const selected = e.target.dataset.tasklist
    
    //remove anything that is selected
    const el = document.querySelector('.selector_ButtonsBtn.selected')
    if(el) {
      el.classList.remove('selected')
    }

    //add selected class to clicked button
    this.setState({
      show: selected
    })
    e.target.classList.add('selected');

    //set preferred task list for next session
    this.ls.setItem('preferredTaskList', selected)
  }

  render() {
    const show = this.state.show
    const buttons = this.props.tasks.map((taskItem, i) => {
      return (
        <button
          className={'selector_ButtonsBtn'}
          onClick={this.handleSelect}
          data-tasklist={i}
          key={i}
        >
          {taskItem.name}
        </button>
      )
    })

    //set selected at load
    if(this.state.loaded) {
      document.querySelector(`[data-tasklist="${show}"]`).classList.add('selected')
    }

    return (
      <div>
        <div className={'selector_Buttons'}>
          {buttons}
        </div>
        <TaskList
          tasks={this.props.tasks[show].tasks}
          taskNum={show}
          key={show}
        />
      </div>
    )
  }
}