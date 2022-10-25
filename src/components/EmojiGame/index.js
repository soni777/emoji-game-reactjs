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
  state = {topScore: 0, gameOn: true, emojis: []}

  onClickEmoji = id => {
    this.setState(prevState => {
      let {emojis, gameOn} = prevState
      if (emojis.includes(id)) {
        gameOn = false
      } else {
        emojis = [...emojis, id]

        if (emojis.length === 12) {
          gameOn = false
        }
      }

      return {emojis, gameOn}
    })
  }

  onClickPlayagain = currentScore => {
    this.setState(prevState => {
      let {topScore} = prevState
      if (currentScore > topScore) {
        topScore = currentScore
      }
      return {topScore, gameOn: true, emojis: []}
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {topScore, gameOn, emojis} = this.state
    const score = emojis.length
    const result = score === 12

    const shuffledEmojis = this.shuffledEmojisList()
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
