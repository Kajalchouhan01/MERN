let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');

function showQuestion(index) {
    questions.forEach((question, i) => {
        question.classList.toggle('active', i === index);
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}
  
// Initialize the first question
showQuestion(currentQuestionIndex);