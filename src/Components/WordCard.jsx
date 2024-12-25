import React, { useState, useEffect, useRef } from "react";

const WordCard = ({ word, onLearn }) => {
  const [isTranslationVisible, setTranslationVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setTranslationVisible(false); // Сбрасываем состояние перевода при смене карточки
    if (buttonRef.current) {
      buttonRef.current.focus(); // Устанавливаем фокус
    }
  }, [word]);

  const toggleTranslation = () => {
    setTranslationVisible(true);
    onLearn();
  };

  return (
    <div>
      <h3>{word.english}</h3>
      <p>{word.transcription}</p>
      {isTranslationVisible ? (
        <p>{word.russian}</p>
      ) : (
        <button ref={buttonRef} onClick={toggleTranslation}>
          Посмотреть перевод
        </button>
      )}
    </div>
  );
};

export default WordCard;
