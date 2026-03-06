import { useMemo, useState } from "react";
import { cards as initialCards } from "./data/cards";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";
import Controls from "./components/Controls";
import "./styles.css";

export default function App() {
  const cards = useMemo(() => initialCards, []);
  const total = cards.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentIndex];
  const progress = total === 0 ? 0 : (currentIndex + 1) / total;

  function flip() {
    setIsFlipped((v) => !v);
  }

  function goNext() {
    setCurrentIndex((i) => Math.min(i + 1, total - 1));
    setIsFlipped(false); // important UX: reset flip on navigation
  }

  function goPrev() {
    setCurrentIndex((i) => Math.max(i - 1, 0));
    setIsFlipped(false);
  }

  return (
    <main className="app">
      <header className="header">
        <h1>JS Flashcards</h1>
        <p>
          Card {currentIndex + 1} / {total}
        </p>
        <ProgressBar value={progress} />
      </header>

      {total === 0 ? (
        <p>No cards found.</p>
      ) : (
        <>
          <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={flip} />

          <Controls
            onPrev={goPrev}
            onNext={goNext}
            onFlip={flip}
            disablePrev={currentIndex === 0}
            disableNext={currentIndex === total - 1}
            isFlipped={isFlipped}
          />
        </>
      )}
    </main>
  );
}