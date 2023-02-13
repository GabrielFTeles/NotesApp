import { showSection, actualSectionActive } from './main.js';

import {
  addNewNote,
  deleteNote,
  editNote,
  searchNotes,
  restartNoteEddition,
  saveNoteEddition
} from './handle-notes.js';

import {
  showModal, 
  hideActiveModal
} from './modals.js';

import {
  addNoteBtn,
  returnBtn,
  saveNoteBtn,
  editNoteBtn,
  searchBtn,
  saveEditBtn,
  newNoteSection,
  notesSection,
  searchSection,
  searchInput,
  previewNoteSection,
  infoBtn,
  infoModal,
  saveModal,
  deleteModal,
  editModal,
  modalContainers,
  confirmSaveBtn,
  confirmEditBtn,
  deleteNoteBtn,
  cancelButtons,
  confirmDeleteBtn
} from './elements.js';

export default () => {
  [modalContainers, cancelButtons].forEach((elementsArray) => {
    elementsArray.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target === element) {
          hideActiveModal();
        }
      })
    })
  });

  addNoteBtn.addEventListener('click', () => {
    showSection(newNoteSection);
  });
  
  returnBtn.addEventListener('click', () => {
    if (actualSectionActive === previewNoteSection) {
      restartNoteEddition();
    }

    showSection(notesSection);
  });

  infoBtn.addEventListener('click', () => {
    showModal(infoModal);
  });

  searchBtn.addEventListener('click', () => {
    showSection(searchSection);
  });

  saveNoteBtn.addEventListener('click', () => { 
    showModal(saveModal);
  });

  confirmSaveBtn.addEventListener('click', addNewNote);

  deleteNoteBtn.addEventListener('click', () => {
    showModal(deleteModal);
  });

  confirmDeleteBtn.addEventListener('click', () => {
    hideActiveModal();
    deleteNote();
  });

  editNoteBtn.addEventListener('click', () => {
    editNote();
  });
  
  saveEditBtn.addEventListener('click', () => {
    showModal(editModal);
  });

  confirmEditBtn.addEventListener('click', () => {
    saveNoteEddition();
  });

  searchInput.addEventListener('input', () => {
    searchNotes(searchInput.value.trim());
  });
}


