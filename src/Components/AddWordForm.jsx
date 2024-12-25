import React, { useState } from "react";
import wordStore from "../store";

const AddWordForm = () => {
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (english && transcription && russian) {
      wordStore.addWord({
        id: Date.now(),  // Генерация уникального ID
        english,
        transcription,
        russian,
      });
      setEnglish("");
      setTranscription("");
      setRussian("");
    } else {
      alert("Все поля должны быть заполнены");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Слово"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />
      <input
        type="text"
        placeholder="Транскрипция"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Перевод"
        value={russian}
        onChange={(e) => setRussian(e.target.value)}
      />
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default AddWordForm;
