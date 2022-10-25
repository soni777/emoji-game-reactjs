/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, gameOn: true, result: true, emojis: []}

  onClickEmoji = id => {
    this.setState(prevState => {
      let {emojis, gameOn, score, result} = prevState
      if (gameOn) {
        if (emojis.includes(id)) {
          result = false
          gameOn = false
        } else {
          score += 1
          emojis = [...emojis, id]
          if (score === 12) {
            gameOn = false
          }
        }
      }
      return {score, emojis, result, gameOn}
    })
  }

  onClickPlayagain = currentScore => {
    this.setState(prevState => {
      let {topScore} = prevState
      if (currentScore > topScore) {
        topScore = currentScore
      }
      return {score: 0, topScore, gameOn: true, result: true, emojis: []}
    })
  }

  render() {
    const {score, topScore, gameOn, result} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const shuffledEmojis = shuffledEmojisList()
    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} gameOn={gameOn} />
        {gameOn && (
          <ul className="emojis-list-container">
            {shuffledEmojis.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                emojiCardDetails={eachItem}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
        {!gameOn && (
          <WinOrLossCard
            winOrLoss={result}
            score={score}
            onClickPlayagain={this.onClickPlayagain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
