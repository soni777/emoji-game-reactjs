import './index.css'

const WinOrLossCard = props => {
  const {winOrLoss, score, onClickPlayagain} = props

  const onClickPlayagainBtn = () => {
    onClickPlayagain(score)
  }

  return (
    <div>
      {winOrLoss && (
        <div className="win-or-loss-card">
          <img
            className="emoji-win-loss-image"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
          <div className="win-or-loss-text">
            <h1 className="result">You Won</h1>
            <p className="subtitle">Best Score</p>
            <p className="totalScore">{score}/12</p>
            <button
              onClick={onClickPlayagainBtn}
              className="play-btn"
              type="button"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {!winOrLoss && (
        <div className="win-or-loss-card">
          <img
            className="emoji-win-loss-image"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
          <div className="win-or-loss-text">
            <h1 className="result">You Lose</h1>
            <p className="subtitle"> Score</p>
            <p className="totalScore">{score}/12</p>
            <button
              onClick={onClickPlayagainBtn}
              className="play-btn"
              type="button"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLossCard
