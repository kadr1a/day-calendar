import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() === '') return;

    setNotes([
      ...notes,
      {
        id: Date.now(),
        text: newNote,
        date: new Date().toLocaleTimeString()
      }
    ]);
    setNewNote('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const currentDate = new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
      <div className="app">
        <div className="header">
          <h1>Календарь дня</h1>
          <div className="current-date">{currentDate}</div>
        </div>

        <div className="notes-container">
          <div className="input-section">
            <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Введите заметку..."
                onKeyPress={(e) => e.key === 'Enter' && addNote()}
            />
            <button onClick={addNote}>Добавить</button>
          </div>

          <div className="notes-list">
            {notes.map(note => (
                <div key={note.id} className="note">
                  <div className="note-content">
                    <span>{note.text}</span>
                    <small>{note.date}</small>
                  </div>
                  <button
                      className="delete-btn"
                      onClick={() => deleteNote(note.id)}
                  >
                    Удалить
                  </button>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
