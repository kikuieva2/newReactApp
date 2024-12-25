import React, { useContext } from "react";
import { WordsContext } from "./WordsContext";

const WordList = () => {
  const { words, loading, error, editWord, deleteWord } = useContext(WordsContext);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>{word.english}</td>
            <td>{word.transcription}</td>
            <td>{word.russian}</td>
            <td>
              <button onClick={() => editWord(word.id, { russian: "новый перевод" })}>Редактировать</button>
              <button onClick={() => deleteWord(word.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordList;
