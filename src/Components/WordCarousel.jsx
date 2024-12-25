import React, { useState } from "react";
import WordCard from "./WordCard";
import styles from "./WordCarousel.module.css";

const WordCarousel = ({ words, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [learnedCount, setLearnedCount] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  const handleLearnedWord = () => {
    setLearnedCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Изучено слов: {learnedCount}</h2>
      <WordCard word={words[currentIndex]} onLearn={handleLearnedWord} />
      <button onClick={handlePrev}>Назад</button>
      <button onClick={handleNext}>Вперёд</button>
    </div>
  );
};

export default WordCarousel;
