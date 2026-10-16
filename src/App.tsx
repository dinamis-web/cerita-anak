/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Book, Character, ActiveView } from './types';
import { storageService } from './services/storage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeDashboard } from './components/HomeDashboard';
import { CharacterStudio } from './components/CharacterStudio';
import { StoryWizard } from './components/StoryWizard';
import { StoryEditor } from './components/StoryEditor';
import { BookReader } from './components/BookReader';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [books, setBooks] = useState<Book[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [selectedCharacterForStory, setSelectedCharacterForStory] = useState<Character | null>(null);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);

  // Load initial persistent data on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const loadedBooks = storageService.getBooks();
    const loadedChars = storageService.getCharacters();
    setBooks(loadedBooks);
    setCharacters(loadedChars);
  };

  // Navigation handlers
  const handleNavigate = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Book Actions
  const handleReadBook = (book: Book) => {
    setActiveBook(book);
    setActiveView('reader');
  };

  const handleEditBook = (book: Book) => {
    setActiveBook(book);
    setActiveView('editor');
  };

  const handleDuplicateBook = (book: Book) => {
    const duplicated = storageService.duplicateBook(book.id);
    if (duplicated) {
      loadData();
    }
  };

  const handleDeleteBook = (id: string) => {
    storageService.deleteBook(id);
    loadData();
    if (activeBook?.id === id) {
      setActiveBook(null);
      setActiveView('home');
    }
  };

  const handleSaveBook = (updatedBook: Book) => {
    storageService.saveBook(updatedBook);
    setActiveBook(updatedBook);
    loadData();
  };

  // Character Actions
  const handleSaveCharacter = (char: Character) => {
    storageService.saveCharacter(char);
    loadData();
  };

  const handleDeleteCharacter = (id: string) => {
    storageService.deleteCharacter(id);
    loadData();
  };

  const handleSelectCharacterToEdit = (char: Character) => {
    setEditingCharacter(char);
    setActiveView('character-studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUseCharacterInStory = (char: Character) => {
    setSelectedCharacterForStory(char);
    setActiveView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Wizard Completion
  const handleWizardFinish = (newBook: Book, openReaderImmediately = false) => {
    storageService.saveBook(newBook);
    loadData();
    setActiveBook(newBook);
    if (openReaderImmediately) {
      setActiveView('reader');
    } else {
      setActiveView('editor');
    }
  };

  // Reset demo data to pristine samples
  const handleResetData = () => {
    if (
      window.confirm(
        'Muat ulang semua data contoh bawaan CeritaKita (Rani, Alif, Kiko)? Perubahan lokal Anda akan digantikan dengan contoh awal.'
      )
    ) {
      storageService.resetAllToDefaults();
      loadData();
      setActiveView('home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#1E292B] selection:bg-[#EADFC9] selection:text-[#0D5C58] overflow-x-hidden w-full">
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onResetData={handleResetData}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <HomeDashboard
            books={books}
            characters={characters}
            onNavigate={handleNavigate}
            onReadBook={handleReadBook}
            onEditBook={handleEditBook}
            onDuplicateBook={handleDuplicateBook}
            onDeleteBook={handleDeleteBook}
            onSelectCharacter={handleSelectCharacterToEdit}
            onCreateCharacter={() => {
              setEditingCharacter(null);
              setActiveView('character-studio');
            }}
          />
        )}

        {activeView === 'character-studio' && (
          <CharacterStudio
            characters={characters}
            initialCharacter={editingCharacter}
            onSaveCharacter={handleSaveCharacter}
            onDeleteCharacter={handleDeleteCharacter}
            onUseCharacterInStory={handleUseCharacterInStory}
          />
        )}

        {activeView === 'wizard' && (
          <StoryWizard
            characters={characters}
            selectedCharacterId={selectedCharacterForStory?.id}
            onFinish={handleWizardFinish}
            onCancel={() => handleNavigate('home')}
            onNavigateToCharacterStudio={() => {
              setEditingCharacter(null);
              setActiveView('character-studio');
            }}
          />
        )}

        {activeView === 'editor' && activeBook && (
          <StoryEditor
            book={activeBook}
            onSaveBook={handleSaveBook}
            onDuplicateBook={handleDuplicateBook}
            onPreviewBook={handleReadBook}
            onBackToLibrary={() => handleNavigate('home')}
          />
        )}

        {/* Fallback if editor accessed without activeBook */}
        {activeView === 'editor' && !activeBook && (
          <div className="max-w-md mx-auto py-16 text-center space-y-4">
            <p className="text-sm text-[#7A6B56]">Pilih buku dari koleksi terlebih dahulu.</p>
            <button
              onClick={() => handleNavigate('home')}
              className="px-4 py-2 bg-[#0D5C58] text-[#FFFDF9] rounded-lg text-xs font-semibold"
            >
              Ke Beranda
            </button>
          </div>
        )}
      </main>

      {/* Full-Screen Interactive Book Reader Modal */}
      {activeView === 'reader' && activeBook && (
        <BookReader
          book={activeBook}
          onClose={() => setActiveView('home')}
          onEditBook={handleEditBook}
        />
      )}

      {/* Footer */}
      {activeView !== 'reader' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
