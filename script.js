const quizQuestion = [{
  question:"Apa yang akan menjadi output setelah pernyataan berikut? x = 30, y = 7, x %= y print(x)",
  options : ["4", "28", "2", "37", "5"],
  answer : "2"
},
{
  question : "Apa yang akan menjadi output setelah pernyataan berikut? x = 3, y = 2, x += y print(x)",
  options : ["3", "2", "5", "1", "6"],
  answer : "5"
},
{
  question : "Singkatan dari IDE adalah?",
  options : ["Integrated Development Envirotment", "Integrated Developers local Envirotment"],
  answer : "Integrated Development Envirotment"
},
{
  question : "Apa nama GUI yang dibuat sebagai shell interaktif dengan python?",
  options : ["PGUI", "Pyshell", "IDLE", "PythonSh", "Bukan salah satu di atas"],
  answer : "IDLE"
},
{
  question : "Apa yang akan menjadi output setelah pernyataan berikut? x = 8, y = 6 print(x != y)",
  options : ["y = 6 and x = 8", "True", "x = 6 and y = 8", "False", "0.4"],
  answer : "True"
},
{
  question :"Apa yang menjadi tipe data 'y' setelah pernyataan berikut jika input yang dimasukan adalah 50? x = input('Enter a number : '), y = str(x)",
  options : ["Float", "String", "List", "Integer", "Boolean"],
  answer : "String"
},
{
  question :"Apa yang akan menjadi output setelah pernyataan berikut? a = list(range(10, -10, 3)) print(sum(a))",
  options :["10", "0", "18", "90", "5"],
  answer : "0"
},
{
  question :"Apa yang akan menjadi output setelah pernyataan berikut? x = True, y = False, print(not y)",
  options :["True", "False", "Not defined", "xy", "x"],
  answer : "True"
},
{
  question :"Apa yang menjadi output setelah pernyataan berikut? x = 72, y = 64, print(x < y)",
  options :["True", "False", "Yes", "No", "x"],
  answer : "True"
},
{
  question :"Manakah dari berikut yang mewakili 'not' boolean?",
  options :["not", "~", "!", "%"],
  answer : "!"
}];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;


function startQuiz() {
  
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}


function displayQuestion() {
  const currentQuestion = quizQuestion[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  
  

  
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";
  

  
  questionText.innerHTML = currentQuestion.question;
  

  
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}


function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestion[currentQuestionIndex];
  

  
  if (selectedOption == currentQuestion.answer) {
    score++;
  }

  
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestion.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}


function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    
    document.getElementById("timer").textContent = timeLeft;

    
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}


function endQuiz() {
  
  clearInterval(timerInterval);

  
  const scorePercentage = (score / quizQuestion.length) * 100;

  
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestion.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
  `;
  document.getElementById("question-container").style.color = "white";
}


document.getElementById("start-button").addEventListener("click", startQuiz);