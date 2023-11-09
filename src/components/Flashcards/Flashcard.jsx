import React, { useState } from "react";
import "./Flashcard.scss";

function Flashcard({ question, answer }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <div className={`flip-card ${isRevealed && 'flip-card--revealed'}`} onClick={() => setIsRevealed(!isRevealed)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{question}</p>
          </div>
          <div className="flip-card-back">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flashcard;
