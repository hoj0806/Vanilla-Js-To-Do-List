const selectors = {
  // task control
  listAddBtn: document.querySelector(".task-controls__add"),
  searchInput: document.querySelector(".task-controls__search-input"),

  // list main
  todoList: document.querySelector(".list"),

  // popup
  popupEditAndAdd: document.querySelector(".popup__editAndAdd"),
  addInput: document.querySelector(".popup__editAndAdd__add__input"),

  // popup read
  popupRead: document.querySelector(".popup__read"),
  memoContent: document.querySelector(".popup__read__memo__content"),
  memoInput: document.querySelector(".popup__read__memo__input"),
  memoBtn: document.querySelector(".popup__read__memo__button"),
  hasgTagBox: document.querySelector(".popup__hashTag__content"),
  hasgTagInput: document.querySelector(".popup__hashTag__input"),

  popupBox: document.querySelector(".pop-up-box"),
  popupBtn: document.querySelector(".pop-up-confirm-btn"),
  popupTitle: document.querySelector(".pop-up-title"),
  editAndAddPopup: document.querySelector(".pop-up-edit-and-add"),
  readPopup: document.querySelector(".pop-up-read"),
  popupReadTitle: document.querySelector(".pop-up-read-title"),
  popupReadConfirmBtn: document.querySelector(".pop-up-confirm-btn-read"),
};

export default selectors;