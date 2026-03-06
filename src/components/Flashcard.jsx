export default function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <button
      type="button"
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={onFlip}
      aria-pressed={isFlipped}
      aria-label="Flashcard. Click to flip."
    >
      <div className="cardContent">
        <div className="cardSideLabel">{isFlipped ? "Answer" : "Question"}</div>
        <div className="cardText">{isFlipped ? card.answer : card.question}</div>
        <div className="cardHint">Click to flip</div>
      </div>
    </button>
  );
}