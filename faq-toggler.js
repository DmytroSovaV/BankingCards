document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.FAQ__question');
  const answers = document.querySelectorAll('.FAQ__answer');

  questions.forEach((question, index) => {
    question.addEventListener('click', () => {
      answers[index].classList.toggle('hidden');
    });
  });
});