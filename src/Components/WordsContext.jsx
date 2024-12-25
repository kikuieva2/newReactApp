import React, { createContext, useState, useEffect } from "react";

// Создание контекста для слов
const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Метод для получения слов с сервера
  const fetchWords = async () => {
    try {
      const response = await fetch("http://your-api-url.com/words");
      if (!response.ok) {
        throw new Error("Не удалось загрузить слова");
      }
      const data = await response.json();
      setWords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  // Метод для добавления нового слова
  const addWord = (newWord) => {
    setWords((prevWords) => [...prevWords, newWord]);
  };

  // Метод для редактирования слова
  const editWord = (id, updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === id ? { ...word, ...updatedWord } : word
      )
    );
  };

  // Метод для удаления слова
  const deleteWord = (id) => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  return (
    <WordsContext.Provider
      value={{
        words,
        loading,
        error,
        addWord,
        editWord,
        deleteWord,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export { WordsContext, WordsProvider };
