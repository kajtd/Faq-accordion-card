const buttons = [...document.querySelectorAll(".faq__btn")];
const questions = [...document.querySelectorAll(".faq__question")];
const answers = [...document.querySelectorAll(".faq__answer")];
const box = document.querySelector('.box');

function toggleFaq() {
  let index = buttons.indexOf(this);
  const buttonToggle = this.getAttribute('aria-expanded');
  for (i=0; i<buttons.length; i++) {
    buttons[i].setAttribute('aria-expanded', 'false');
    buttons[i].classList.remove("faq__btn--active");
    questions[i].classList.remove("faq__question--active");
    answers[i].classList.remove("faq__answer--active");
  }
  
  if (buttonToggle === 'false') {
    box.classList.add("box--active");
    questions[index].classList.add("faq__question--active");
    answers[index].classList.add("faq__answer--active");
    this.classList.add("faq__btn--active");
    this.setAttribute('aria-expanded', 'true');
  }
  else box.classList.remove("box--active");
}

buttons.forEach(button => button.addEventListener('click', toggleFaq));