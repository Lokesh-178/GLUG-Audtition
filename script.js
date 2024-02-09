const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
      answer: 'Jupiter'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'],
      answer: 'Harper Lee'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'H2SO4'],
      answer: 'H2O'
    },
    {
      question: 'What year did World War I begin?',
      options: ['1914', '1918', '1939', '1945'],
      answer: '1914'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      answer: 'Leonardo da Vinci'
    },
    {
      question: 'What is the smallest bone in the human body?',
      options: ['Stapes', 'Femur', 'Tibia', 'Radius'],
      answer: 'Stapes'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Won', 'Dollar', 'Pound'],
      answer: 'Yen'
    },
    {
      question: 'What is the tallest mammal?',
      options: ['Giraffe', 'Elephant', 'Horse', 'Rhino'],
      answer: 'Giraffe'
    },
    {
      question: 'Who is known as the father of Computers?',
      options: ['Charles Babbage', 'Alan Turing', 'Bill Gates', 'Steve Jobs'],
      answer: 'Charles Babbage'
    }
  ];
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const resultEl = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
  
    questionEl.textContent = currentQuizData.question;
    optionsEl.innerHTML = '';
  
    currentQuizData.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('btn');
      button.addEventListener('click', selectOption);
      optionsEl.appendChild(button);
    });
  }
  
  function selectOption(e) {
    const selectedOption = e.target.textContent;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedOption === currentQuizData.answer) {
      score += 10;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionEl.textContent = '';
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
    resultEl.textContent = `Your score: ${score}/${quizData.length * 10}`;
  }
  
  loadQuiz();
  