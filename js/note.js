import {
  notesList,
  previewNote
} from './handle-notes.js';

import { getRandomColor } from './random-color.js';

export default class Note {
  constructor(title, description, color = getRandomColor()) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.id = notesList.length + 1;
  }

  get _getElement() {
    const noteContainer = document.createElement('li');
    const noteTitle     = document.createElement('h2');

    noteContainer.classList.add('note');
    noteContainer.setAttribute('data-id', this.id);

    noteContainer.style.backgroundColor = this.color;
    noteTitle.textContent = this.title;

    noteContainer.appendChild(noteTitle);

    this.initPreviewEvent(noteContainer);

    return noteContainer;
  }

  initPreviewEvent(element) {
    element.addEventListener('click', () => {
      previewNote(element.dataset.id);
    });
  }

  appendTo(parentElement) {
    const element = this._getElement;
    parentElement.appendChild(element);

    return element;
  }
}