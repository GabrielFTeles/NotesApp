import events from './events.js';
import loadNotes from './handle-notes.js';

import { clearSearchSection } from './handle-notes.js'

import {
  notesSection,
  searchSection
} from './elements.js';

events();
loadNotes();

let actualSectionActive = notesSection;

const showSection = (section) => {
  actualSectionActive.classList.remove('active');
  section.classList.add('active');

  if(actualSectionActive === searchSection) {
    clearSearchSection();
  }

  actualSectionActive = section;

  checkIfSectionIsEmpty(section);
}

let lastSectionChecked = notesSection;

const checkIfSectionIsEmpty = (section) => {
  lastSectionChecked.classList.remove('empty');

  const isNotesOrSearchSection = !(section === notesSection || section === searchSection);

  if(isNotesOrSearchSection) {
    return;
  }

  const notesInSection = section.querySelectorAll('.note');
  const isSectionEmpty = (notesInSection.length === 0);

  if (isSectionEmpty) {
    section.classList.add('empty');
    lastSectionChecked = section;
  }
}

checkIfSectionIsEmpty(notesSection);

export { 
  showSection, 
  actualSectionActive, 
  checkIfSectionIsEmpty 
};