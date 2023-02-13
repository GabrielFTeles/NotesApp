let modalActive;

const showModal = (modal) => {
  modalActive = modal;
  document.body.classList.add('modal-open');
  modal.classList.add('active');
}

const hideActiveModal = () => {
  document.body.classList.remove('modal-open');
  modalActive.classList.remove('active');
  modalActive = null;
}

export {
  showModal,
  hideActiveModal
};