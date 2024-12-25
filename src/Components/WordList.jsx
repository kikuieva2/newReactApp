
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import wordStore from "../store";  // Импортируем store

const CardList = observer(() => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  const showNextCard = () => {
    if (currentWordIndex < wordStore.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const showPrevCard = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  useEffect(() => {
    // Можно установить фокус на кнопку "Показать перевод", если она есть
  }, [currentWordIndex]);

  const currentWord = wordStore.words[currentWordIndex];

  return (
    <div>
      {currentWord ? (
        <div>
          <h2>{currentWord.english}</h2>
          <button onClick={() => alert(currentWord.russian)}>Показать перевод</button>
          <button onClick={showPrevCard}>Предыдущее</button>
          <button onClick={showNextCard}>Следующее</button>
        </div>
      ) : (
        <p>Слова не загружены или список пуст.</p>
      )}
    </div>
  );
});

export default CardList;
