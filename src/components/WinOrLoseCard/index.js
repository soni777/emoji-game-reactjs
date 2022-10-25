import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {winOrLoss, score, onClickPlayagain} = props
  const imageUrl = winOrLoss ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = winOrLoss ? 'You Won' : 'You Lose'
  const scoreLabel = winOrLoss ? 'Best Score' : 'Score'

  const onClickPlayagainBtn = () => {
    onClickPlayagain(score)
  }

  return (
    <div>
      <div className="win-or-loss-card">
        <img
          className="emoji-win-loss-image"
          src={imageUrl}
          alt="win or lose"
        />
        <div className="win-or-loss-text">
          <h1 className="result">{gameStatus}</h1>
          <p className="subtitle">{scoreLabel}</p>
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
    </div>
  )
}

export default WinOrLossCard
