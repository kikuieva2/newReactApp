import React from "react";
import WordList from "../components/WordList";
import words from "../words.json";

const Home = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <WordList words={words} />
    </div>
  );
};

export default Home;
