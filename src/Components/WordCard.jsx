import React, { useContext, useState, useEffect } from "react";
import { WordsContext } from "./WordsContext";

const WordCard = () => {
  const { words, loading, error } = useContext(WordsContext);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextCard = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setCurrentWordIndex(0); // Вернуться к первой карточке
    }
  };

  const prevCard = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    } else {
      setCurrentWordIndex(words.length - 1); // Перейти к последней карточке
    }
  };

  const currentWord = words[currentWordIndex];

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h2>Карточка слова</h2>
      <div>
        <h3>{currentWord.english}</h3>
        <p>{currentWord.transcription}</p>
        <button>{currentWord.russian}</button>
        <div>
          <button onClick={prevCard}>Назад</button>
          <button onClick={nextCard}>Вперед</button>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
