import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, gameOn} = this.props
    const styling = gameOn
      ? 'logo-container margin-auto'
      : ' logo-container margin-left'
    return (
      <nav className="navbar">
        <div className={styling}>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
        {gameOn && (
          <div className="scoreBar">
            <p className="score">Score: {score}</p>
            <p className="topScore">Top Score: {topScore}</p>
            <p className="score">Help</p>
          </div>
        )}
        {/* {!gameOn && (
          <div className="scoreBar">
            <p className="score">Help</p>
          </div>
        )} */}
      </nav>
    )
  }
}

export default NavBar
