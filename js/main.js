import events from './events.js';
import loadNotes from './handle-notes.js'

import {
  notesSection
} from './elements.js';

events();
loadNotes();

let actualSectionActive = notesSection;

const showSection = (section) => {
  actualSectionActive.classList.remove('active');
  section.classList.add('active');

  actualSectionActive = section;
}

export { showSection, actualSectionActive };