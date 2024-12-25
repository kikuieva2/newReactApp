import React from "react";
import WordList from "./WordList";
import CardList from "./CardList";
import AddWordForm from "./AddWordForm";

const App = () => {
  return (
    <div>
      <h1>Словарь</h1>
      <AddWordForm />
      <WordList />
      <CardList />
    </div>
  );
};

export default App;
