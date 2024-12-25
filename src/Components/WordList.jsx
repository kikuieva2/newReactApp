import React, { useState } from "react";
import "./WordList.css";

const WordList = ({ words }) => {
  const [editableRow, setEditableRow] = useState(null);
  const [editedWord, setEditedWord] = useState({});
  const [errors, setErrors] = useState({});

  const handleEditClick = (word) => {
    setEditableRow(word.id);
    setEditedWord(word);
    setErrors({}); // Сбрасываем ошибки
  };

  const handleSaveClick = () => {
    const validationErrors = validateFields(editedWord);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.error("Ошибка: заполните все поля корректно!");
      return;
    }
    console.log("Сохранено:", editedWord);
    setEditableRow(null);
    setErrors({});
  };

  const handleCancelClick = () => {
    setEditableRow(null);
    setEditedWord({});
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedWord({ ...editedWord, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateFields = (word) => {
    const newErrors = {};
    if (!word.word || word.word.trim() === "") {
      newErrors.word = "Поле не может быть пустым";
    }
    if (!word.transcription || word.transcription.trim() === "") {
      newErrors.transcription = "Поле не может быть пустым";
    }
    if (!word.translation || word.translation.trim() === "") {
      newErrors.translation = "Поле не может быть пустым";
    }
    return newErrors;
  };

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
            {editableRow === word.id ? (
              <>
                <td>
                  <input
                    name="word"
                    value={editedWord.word}
                    onChange={handleChange}
                    className={errors.word ? "error" : ""}
                  />
                  {errors.word && <span className="error-message">{errors.word}</span>}
                </td>
                <td>
                  <input
                    name="transcription"
                    value={editedWord.transcription}
                    onChange={handleChange}
                    className={errors.transcription ? "error" : ""}
                  />
                  {errors.transcription && (
                    <span className="error-message">{errors.transcription}</span>
                  )}
                </td>
                <td>
                  <input
                    name="translation"
                    value={editedWord.translation}
                    onChange={handleChange}
                    className={errors.translation ? "error" : ""}
                  />
                  {errors.translation && (
                    <span className="error-message">{errors.translation}</span>
                  )}
                </td>
                <td>
                  <button onClick={handleSaveClick} disabled={Object.keys(errors).length > 0}>
                    Сохранить
                  </button>
                  <button onClick={handleCancelClick}>Отмена</button>
                </td>
              </>
            ) : (
              <>
                <td>{word.word}</td>
                <td>{word.transcription}</td>
                <td>{word.translation}</td>
                <td>
                  <button onClick={() => handleEditClick(word)}>Редактировать</button>
                  <button>Удалить</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordList;
