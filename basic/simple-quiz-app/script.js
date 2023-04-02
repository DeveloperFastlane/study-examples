document.addEventListener('DOMContentLoaded', function() {
  const quizList = document.getElementById('quiz-list');
  const quizDetail = document.getElementById('quiz-detail');
  const backButton = document.getElementById('back-to-list');
  const submitButton = document.getElementById('submit-quiz');
  
  let currentQuizIndex = 0; // 현재 퀴즈 인덱스를 저장

  // 퀴즈 목록 데이터
  const quizzes = [
    {
      title: '역사 퀴즈',
      questions: [
        {
          question: '고려시대의 수도는 어디인가요?',
          options: ['서울', '경주', '강릉', '가야'],
          answer: 0
        },
        {
          question: '세종대왕이 창제한 한글의 원래 이름은 무엇인가요?',
          options: ['훈민정음', '훈민한글', '옛글', '고대한글'],
          answer: 0
        }
      ]
    },
    {
      title: '과학 퀴즈',
      questions: [
        {
          question: '물이 끓는 온도는 몇 도인가요?',
          options: ['0도', '50도', '100도', '150도'],
          answer: 2
        },
        {
          question: '태양계에서 가장 큰 행성은 어느 행성인가요?',
          options: ['지구', '화성', '목성', '토성'],
          answer: 2
        }
      ]
    }
  ];

  function createQuizCard(quiz, index) {
    const card = document.createElement('div');
    card.setAttribute('class', 'quiz-card');
    card.innerHTML = `<h3>${quiz.title}</h3>`;
    card.addEventListener('click', () => showQuizDetail(index));
    return card;
  }

  function createQuizQuestion(question, index) {
    const questionElement = document.createElement('div');
    questionElement.setAttribute('class', 'quiz-question');
    questionElement.innerHTML = `<h4>Q${index + 1}: ${question.question}</h4>`;
    
    const optionsElement = document.createElement('div');
    optionsElement.setAttribute('class', 'quiz-options');
    
    question.options.forEach((option, i) => {
      const optionElement = document.createElement('label');
      optionElement.innerHTML = `
        <input type="radio" name="question-${index}" value="${i}">
        <span>${option}</span>
      `;
      optionsElement.appendChild(optionElement);
    });

    questionElement.appendChild(optionsElement);
    return questionElement;
  }

  function showQuizDetail(index) {
    currentQuizIndex = index; // 현재 퀴즈 인덱스를 저장
    quizList.style.display = 'none';
    quizDetail.style.display = 'block';

    const quiz = quizzes[index];
    document.getElementById('quiz-title').textContent = quiz.title;
    
    const quizQuestions = document.getElementById('quiz-questions');
    quizQuestions.innerHTML = '';
    
    quiz.questions.forEach((question, i) => {
      const questionElement = createQuizQuestion(question, i);
      quizQuestions.appendChild(questionElement);
    });
  }

  function hideQuizDetail() {
    quizDetail.style.display = 'none';
    quizList.style.display = 'block';
  }

  function calculateQuizResult() {
    const quiz = quizzes[currentQuizIndex]; // 현재 퀴즈에 대한 정보를 가져옵니다.
    let correctAnswers = 0;

    quiz.questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
      
      if (selectedOption && parseInt(selectedOption.value) === question.answer) {
        correctAnswers++;
      }
    });

    return {
      totalQuestions: quiz.questions.length,
      correctAnswers: correctAnswers
    };
  }

  function showQuizResult(result) {
    const resultMessage = `정답 수: ${result.correctAnswers} / ${result.totalQuestions}`;
    alert(resultMessage);
  }

  // 퀴즈 목록을 생성하고 페이지에 삽입
  for (const [index, quiz] of quizzes.entries()) {
    const card = createQuizCard(quiz, index);
    quizList.querySelector('.row').appendChild(card);
  }

  backButton.addEventListener('click', hideQuizDetail);
  submitButton.addEventListener('click', () => {
    const result = calculateQuizResult();
    showQuizResult(result);
  });
});