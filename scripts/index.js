// selectors

// popup
const popupWrapper = document.querySelector(".pop-up-wrapper");
const popupBox = document.querySelector(".pop-up-box");
const popupBtn = document.querySelector(".pop-up-confirm-btn");
const popupTitle = document.querySelector(".pop-up-title");
const editAndAddPopup = document.querySelector(".pop-up-edit-and-add");
const readPopup = document.querySelector(".pop-up-read");
const popupReadTitle = document.querySelector(".pop-up-read-title");
const popupReadConfirmBtn = document.querySelector(".pop-up-confirm-btn-read");

const listAddBtn = document.querySelector(".feature-box__add-button-box");
const addInput = document.querySelector(".add-input");
const listContainer = document.querySelector(".todo-list-container");
const memoBtn = document.querySelector(".memo-button");
const memoInput = document.querySelector(".memo-input");
const memoContent = document.querySelector(".memo-content");
const hasgTagInput = document.querySelector(".hashtag-input");
const hasgTagBox = document.querySelector(".hashtagBox");

let selectList;

// Event handler

// list add button event
listAddBtn.addEventListener("click", () => {
  popupWrapper.classList.add("show-pop-up");
  popupBtn.textContent = "추가";
  popupTitle.textContent = "할 일 추가하기";
  editAndAddPopup.classList.remove("hide-pop-up");
  readPopup.classList.add("hide-pop-up");
});

// popup confirm button event
popupBtn.addEventListener("click", (e) => {
  if (e.target.textContent === "추가") {
    const html = `<li class="list-item">
              <div class="list-title">${addInput.value}</div>
              <div class="list-button-box">
                <button class="list-edit-btn">
                  <img src="/icons/listEditIcon.svg" class="list-edit-icon"/>
                </button>
                <button class="list-delete-btn">
                  <img src="/icons/listDeleteIcon.svg" class="list-delete-icon"/>
                </button>
              </div>
            </li>`;
    listContainer.insertAdjacentHTML("beforeend", html);
  } else if (e.target.textContent === "수정") {
    selectList.children[0].textContent = addInput.value;
  }

  popupWrapper.classList.remove("show-pop-up");
});

listContainer.addEventListener("click", (e) => {
  // list delete button
  if (e.target.classList.contains("list-delete-btn")) {
    const deleteItem = e.target.closest(".list-item");
    deleteItem.remove();
  }

  if (e.target.classList.contains("list-edit-btn")) {
    popupWrapper.classList.add("show-pop-up");
    popupTitle.textContent = "할 일 수정하기";
    popupBtn.textContent = "수정";
    const editItem = e.target.closest(".list-item");
    const listTitle = editItem.children[0].textContent;
    addInput.value = listTitle;
    selectList = editItem;
  }

  if (e.target.classList.contains("list-title")) {
    selectList = e.target;
    memoContent.textContent = e.target.dataset.memo;
    popupWrapper.classList.add("show-pop-up");
    editAndAddPopup.classList.add("hide-pop-up");
    readPopup.classList.remove("hide-pop-up");
    popupReadTitle.textContent = e.target.textContent;
  }
});

memoBtn.addEventListener("click", () => {
  if (memoBtn.textContent === "확인") {
    memoInput.classList.remove("show-pop-up");
    memoBtn.textContent = "메모하기";
    selectList.setAttribute("data-memo", memoInput.value);
    memoContent.textContent = selectList.dataset.memo;
    // console.log(memoInput.value);
  } else {
    memoBtn.textContent = "확인";
    memoInput.classList.add("show-pop-up");
  }
});

popupReadConfirmBtn.addEventListener("click", () => {
  memoContent.textContent = "";
  memoInput.value = "";
  popupWrapper.classList.remove("show-pop-up");
});

hasgTagInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("해시태그추가");
    const hashTag = `<div>${e.target.value}</div>`;
    hasgTagBox.insertAdjacentHTML("beforeend", hashTag);
    e.target.value = "";
  }
});
