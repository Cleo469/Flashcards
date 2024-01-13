

const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;
let tempQuestion;
let tempAnswer;

addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("hide");
  addQuestionCard.classList.add("hide");
  if (editBool) {
    editBool = false;
    submitQuestion();
  }
});

cardButton.addEventListener("click", () => {
  editBool = false;
  tempQuestion = question.value.trim();
  tempAnswer = answer.value.trim();
  if (!tempQuestion || !tempAnswer) {
    errorMessage.classList.remove("hide");
  } else {
    container.classList.remove("hide");
    errorMessage.classList.add("hide");
    viewlist();
    question.value = "";
    answer.value = "";
  }
});

function viewlist() {
  var listCard = document.getElementsByClassName("card-list-container");
  var div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML += `<p class="question-div">${tempQuestion}</p>`;
  var displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = tempAnswer;
  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });
  div.appendChild(link);
  div.appendChild(displayAnswer);
  let buttonsCon = document.createElement("div");
  buttonsCon.classList.add("buttons-con");
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
  });
  buttonsCon.appendChild(editButton);
  disableButtons(false);
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  buttonsCon.appendChild(deleteButton);
  div.appendChild(buttonsCon);
  listCard[0].appendChild(div);
  hideQuestion();
}

function modifyElement(element, isEdit) {
  // Implement the functionality for editing or deleting elements
}

function disableButtons(disabled) {
  // Implement the functionality to disable or enable buttons
}


const pageTop = document.getElementById('page-top');
const headerNavs = document.querySelector('.nav-bar ul li');
let activePage = 'home';



function goToPage(pageName) {
  if(pageName === 'About us') {
      window.location.href = "about us.html";
  } else if(pageName === 'flashcard') {
      window.location.href = "flashcard.html";
  } else {
      window.location.href = "index.html";        
  }
}

