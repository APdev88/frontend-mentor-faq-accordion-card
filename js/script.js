const questionEl = document.querySelectorAll(".accordion__right__question__cont");
const answerEl = document.querySelectorAll(".accordion__right__answer");

for (let i = 0; i < questionEl.length; i++) {
  const question = questionEl[i];

  for (let y = 0; y < answerEl.length; y++) {
    const answer = answerEl[i];

    question.addEventListener("click", function () {
      question.classList.toggle("active");
      answer.classList.toggle("hidden");
    });
  }
}
