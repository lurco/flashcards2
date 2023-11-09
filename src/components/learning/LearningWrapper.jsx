import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeckandFlashcards } from "/src/api/api.js";
import Flashcard from "../Flashcards/Flashcard.jsx";

function LearningWrapper() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getDeckandFlashcards(deckId, controller.signal).then(
      ([deckResponse, flashcardsResponse]) => {
        setDeck(deckResponse);
        setFlashcards(flashcardsResponse);
      },
    );

    return () => {
      controller.abort();
    };
  }, []);

  if (!deck) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Learning: {deckId} {deck.name} {deck.description}
      <Flashcard
        question={flashcards[0].question}
        answer={flashcards[0].answer}
      />
    </div>
  );
}

export default LearningWrapper;
