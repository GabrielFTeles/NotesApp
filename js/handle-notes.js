import Note from './note.js';

import { 
  showSection,
  checkIfSectionIsEmpty 
} from './main.js'

import { hideActiveModal } from './modals.js';

import {
  titleInput,
  descriptionInput,
  notesSection,
  searchSection,
  notesListElement,
  searchListElement,
  previewNoteSection,
  previewTitle,
  previewDescription,
  editNoteBtn,
  saveEditBtn,
  searchInput
} from './elements.js';

const notesList = [];

let previewingNote;

const displayNote = (...notes) => {
  notes.forEach((note) => {
    note.appendTo(notesListElement);
  });
}

const updateNotesID = () => {
  for (const i in notesList) {
    notesList[i].id = +i + 1;
  }
}

const updateDisplayedNotes = () => {
  clearDisplayedNotes(notesListElement);
  displayNote(...notesList);
}

const clearDisplayedNotes = (element) => {
  element.innerHTML = '';
}

const checkParameter = (parameter) => {
  if (!parameter) {
    return false;
  }

  if (!parameter.trim()) {
    return false;
  }

  return true;
}

const saveNotes = () => {
  localStorage.notes = JSON.stringify(notesList);
}

const deleteNote = () => {
  const index = previewingNote.id - 1;

  notesList.splice(index, 1);

  updateNotesID();
  saveNotes();
  clearDisplayedNotes(notesListElement);
  restartNoteEddition();
  displayNote(...notesList);
  showSection(notesSection);
}

const clearSearchSection = () => {
  searchInput.value = '';
  clearDisplayedNotes(searchListElement);
}

const addNewNote = () => {
  const inputsToCheck = [titleInput, descriptionInput]

  for (const input of inputsToCheck) {
    input.classList.remove('invalid');

    if (!checkParameter(input.value)) {
      input.classList.add('invalid');
      return;
    }
  }

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  const note = new Note(title, description);

  titleInput.value = '';
  descriptionInput.value = '';

  notesList.push(note);

  saveNotes();
  displayNote(note);
  hideActiveModal();
  showSection(notesSection);
}

const previewNote = (noteID) => {
  const note = notesList[noteID - 1];

  previewingNote = note;

  const { title, description } = note;

  previewTitle.textContent = title;
  previewDescription.textContent = description;

  showSection(previewNoteSection);
}

const restartNoteEddition = () => {
  editNoteBtn.classList.remove('hidden');
  saveEditBtn.classList.add('hidden');

  previewTitle.classList.remove('invalid');
  previewDescription.classList.remove('invalid');

  previewTitle.setAttribute('contenteditable', 'false');
  previewDescription.setAttribute('contenteditable', 'false');
}

const editNote = () => {
  previewTitle.setAttribute('contenteditable', 'true');
  previewDescription.setAttribute('contenteditable', 'true');

  editNoteBtn.classList.add('hidden');
  saveEditBtn.classList.remove('hidden');
}

const saveNoteEddition = () => {
  previewTitle.classList.remove('invalid');
  previewDescription.classList.remove('invalid');

  const inputsToCheck = [previewTitle, previewDescription]

  for (const input of inputsToCheck) {
    input.classList.remove('invalid');

    if (!checkParameter(input.textContent)) {
      input.classList.add('invalid');
      return;
    }
  }

  const title = previewTitle.textContent;
  const description = previewDescription.textContent;

  notesList[previewingNote.id - 1].title = title;
  notesList[previewingNote.id - 1].description = description;

  saveNotes();
  clearSearchSection();
  restartNoteEddition();
  hideActiveModal();
  updateDisplayedNotes();
}

const createSearchRegexp = (searchText) => {
  searchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  return new RegExp(searchText, 'gi');
}

const searchNotes = (searchText) => {
  clearDisplayedNotes(searchListElement);

  if (!searchText) {
    checkIfSectionIsEmpty(searchSection);
    return;
  }

  const searchRegex = createSearchRegexp(searchText);

  const resultArray = notesList.filter((note) => {
    const { title } = note;
    return title.match(searchRegex);
  });

  resultArray.forEach((note) => {
    note.appendTo(searchListElement)
  });

  checkIfSectionIsEmpty(searchSection);
}

export default function loadNotes() {
  const storagedNotes = JSON.parse(localStorage.getItem('notes'));

  if (!storagedNotes) {
    return;
  }

  storagedNotes.forEach((storagedNote) => {
    const { title, description, color } = storagedNote;
    const note = new Note(title, description, color);
    notesList.push(note);
  })

  displayNote(...notesList);
}

export { 
  addNewNote,
  notesList,
  previewNote,
  deleteNote,
  editNote,
  searchNotes,
  restartNoteEddition,
  saveNoteEddition,
  clearSearchSection
};
