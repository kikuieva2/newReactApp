import React from "react";
import { WordsProvider } from "./WordsContext";
import WordList from "./WordList"; // Твой компонент таблицы
import WordCard from "./WordCard"; // Твой компонент карточки

function App() {
  return (
    <WordsProvider>
      <div className="App">
        <h1>Словарь</h1>
        <WordList />
        <WordCard />
      </div>
    </WordsProvider>
  );
}

export default App;
