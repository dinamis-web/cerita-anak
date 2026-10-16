import { Book, Character } from '../types';
import { SAMPLE_BOOKS, SAMPLE_CHARACTERS } from '../data/sampleBooks';

const BOOKS_STORAGE_KEY = 'ceritakita_books_v1';
const CHARACTERS_STORAGE_KEY = 'ceritakita_characters_v1';

export const storageService = {
  // Books
  getBooks(): Book[] {
    try {
      const data = localStorage.getItem(BOOKS_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(SAMPLE_BOOKS));
        return SAMPLE_BOOKS;
      }
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Automatically migrate/upgrade sample books if newer version has 8 pages
        const raniSample = SAMPLE_BOOKS.find((b) => b.id === 'book-rani-layang-layang');
        if (raniSample) {
          const raniIdx = parsed.findIndex((b: Book) => b.id === 'book-rani-layang-layang');
          if (raniIdx >= 0 && parsed[raniIdx].pages.length < 8) {
            parsed[raniIdx] = { ...raniSample };
            localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(parsed));
          }
        }
        return parsed;
      }
      return SAMPLE_BOOKS;
    } catch {
      return SAMPLE_BOOKS;
    }
  },

  getBookById(id: string): Book | undefined {
    const books = this.getBooks();
    return books.find((b) => b.id === id);
  },

  saveBook(book: Book): void {
    try {
      const books = this.getBooks();
      const index = books.findIndex((b) => b.id === book.id);
      const updatedBook = {
        ...book,
        updatedAt: new Date().toISOString(),
      };

      if (index >= 0) {
        books[index] = updatedBook;
      } else {
        books.unshift(updatedBook);
      }
      localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
    } catch (err) {
      console.error('Failed to save book to localStorage', err);
    }
  },

  deleteBook(id: string): void {
    try {
      const books = this.getBooks().filter((b) => b.id !== id);
      localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
    } catch (err) {
      console.error('Failed to delete book from localStorage', err);
    }
  },

  duplicateBook(id: string): Book | null {
    try {
      const source = this.getBookById(id);
      if (!source) return null;

      const duplicated: Book = {
        ...source,
        id: `book-${Date.now()}`,
        title: `${source.title} (Salinan)`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isFeatured: false,
        pages: source.pages.map((p, idx) => ({
          ...p,
          id: `p-${Date.now()}-${idx}`,
        })),
      };

      this.saveBook(duplicated);
      return duplicated;
    } catch (err) {
      console.error('Failed to duplicate book', err);
      return null;
    }
  },

  // Characters
  getCharacters(): Character[] {
    try {
      const data = localStorage.getItem(CHARACTERS_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(SAMPLE_CHARACTERS));
        return SAMPLE_CHARACTERS;
      }
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : SAMPLE_CHARACTERS;
    } catch {
      return SAMPLE_CHARACTERS;
    }
  },

  getCharacterById(id: string): Character | undefined {
    const characters = this.getCharacters();
    return characters.find((c) => c.id === id);
  },

  saveCharacter(character: Character): void {
    try {
      const characters = this.getCharacters();
      const index = characters.findIndex((c) => c.id === character.id);
      if (index >= 0) {
        characters[index] = character;
      } else {
        characters.unshift(character);
      }
      localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(characters));
    } catch (err) {
      console.error('Failed to save character to localStorage', err);
    }
  },

  deleteCharacter(id: string): void {
    try {
      const characters = this.getCharacters().filter((c) => c.id !== id);
      localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(characters));
    } catch (err) {
      console.error('Failed to delete character from localStorage', err);
    }
  },

  // Reset to initial sample state
  resetAllToDefaults(): void {
    try {
      localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(SAMPLE_BOOKS));
      localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(SAMPLE_CHARACTERS));
    } catch (err) {
      console.error('Failed to reset data', err);
    }
  },
};
