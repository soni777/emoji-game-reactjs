import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails
  const onClickEmojiBtn = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button onClick={onClickEmojiBtn} className="btn" type="button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
