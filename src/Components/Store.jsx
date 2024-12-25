// store.js
import { makeAutoObservable } from "mobx";
import axios from "axios";

class WordStore {
  words = [];  // Массив для хранения слов
  isLoading = false;  // Индикатор загрузки
  error = null;  // Ошибка, если она возникнет

  constructor() {
    makeAutoObservable(this);  // Делает наш класс MobX-совместимым
  }

  // Метод для получения слов из базы
  async fetchWords() {
    this.isLoading = true;
    try {
      const response = await axios.get("API_URL_TO_GET_WORDS");
      this.words = response.data;  // Получаем данные
    } catch (error) {
      this.error = "Ошибка при загрузке данных";
    } finally {
      this.isLoading = false;
    }
  }

  // Метод для добавления нового слова
  addWord(word) {
    this.words.push(word);
  }

  
  removeWord(wordId) {
    this.words = this.words.filter(word => word.id !== wordId);
  }
  updateWord(updatedWord) {
    this.words = this.words.map(word =>
      word.id === updatedWord.id ? updatedWord : word
    );
  }
}

const wordStore = new WordStore();
export default wordStore;
