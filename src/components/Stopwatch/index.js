// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, secondsTime: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  resetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, secondsTime: 0})
  }

  StopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({secondsTime: prevState.secondsTime + 1}))
  }

  startButton = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  renderSeconds = () => {
    const {secondsTime} = this.state
    const seconds = Math.floor(secondsTime % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {secondsTime} = this.state
    const minutes = Math.floor(secondsTime / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="time-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="name">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="buttons-container">
              <button
                className="button start-btn"
                type="button"
                onClick={this.startButton}
                disabled={isTimerRunning}
              >
                Start
              </button>

              <button
                className="button stop-btn"
                type="button"
                onClick={this.StopButton}
              >
                Stop
              </button>
              <button
                className="button reset-btn"
                type="button"
                onClick={this.resetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
