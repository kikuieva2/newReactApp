import React from "react";
import WordCarousel from "../Components/WordCarousel";
import words from "../words.json";

const WordGame = () => {
  return (
    <div>
      <h1>Тренажёр слов</h1>
      <WordCarousel words={words} initialIndex={0} />
    </div>
  );
};

export default WordGame;
