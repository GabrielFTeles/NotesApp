const notesSection       = document.querySelector('.notes-section');
const notesListElement   = document.querySelector('#notes-list');
const searchListElement  = document.querySelector('#search-list');
const newNoteSection     = document.querySelector('.new-note-section');
const previewNoteSection = document.querySelector('.preview-note-section');
const searchSection      = document.querySelector('.search-section');
const titleInput         = document.querySelector('#note-title');
const descriptionInput   = document.querySelector('#note-description');
const addNoteBtn         = document.querySelector('#add-note');
const saveNoteBtn        = document.querySelector('#save-note');
const returnBtn          = document.querySelector('#back-button');
const searchInput        = document.querySelector('#search-input');
const searchBtn          = document.querySelector('#search-button');
const infoBtn            = document.querySelector('#info-button');
const editNoteBtn        = document.querySelector('#edit-button'); 
const saveEditBtn        = document.querySelector('#save-edit');
const infoModal          = document.querySelector('#info-modal');
const saveModal          = document.querySelector('#save-modal');
const deleteModal        = document.querySelector('#delete-modal');
const editModal          = document.querySelector('#edit-modal');
const confirmSaveBtn     = document.querySelector('#confirm-save');
const deleteNoteBtn      = document.querySelector('#delete-button');
const confirmDeleteBtn   = document.querySelector('#confirm-delete');
const confirmEditBtn     = document.querySelector('#confirm-edit');
const previewTitle       = document.querySelector('#preview-title');
const previewDescription = document.querySelector('#preview-description');
const modalContainers    = document.querySelectorAll('.modal-container');
const cancelButtons      = document.querySelectorAll('.discard-button');

export {
  notesSection,
  notesListElement,
  newNoteSection,
  searchSection,
  searchListElement,
  titleInput,
  descriptionInput,
  searchBtn,
  searchInput,
  addNoteBtn,
  saveNoteBtn,
  returnBtn,
  deleteNoteBtn,
  saveEditBtn,
  infoBtn,
  infoModal,
  saveModal,
  deleteModal,
  editModal,
  modalContainers,
  confirmSaveBtn,
  confirmDeleteBtn,
  confirmEditBtn,
  editNoteBtn,
  cancelButtons,
  previewNoteSection,
  previewTitle,
  previewDescription
};