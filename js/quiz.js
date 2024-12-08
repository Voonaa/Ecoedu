const quizData = [
    {
        question: "Apa yang dimaksud dengan efek rumah kaca?",
        options: [
            "Fenomena tertahannya panas di atmosfer bumi",
            "Rumah yang terbuat dari kaca",
            "Tanaman yang ditanam di dalam rumah kaca",
            "Efek pemantulan cahaya matahari"
        ],
        correct: 0
    },
    {
        question: "Manakah yang merupakan sumber energi terbarukan?",
        options: [
            "Batu bara",
            "Minyak bumi",
            "Energi matahari",
            "Gas alam"
        ],
        correct: 2
    },
    {
        question: "Apa yang dimaksud dengan 3R dalam pengelolaan sampah?",
        options: [
            "Read, Remember, Repeat",
            "Reduce, Reuse, Recycle",
            "Run, Rest, Recover",
            "React, Respond, Return"
        ],
        correct: 1
    },
    {
        question: "Gas apa yang paling berkontribusi terhadap pemanasan global?",
        options: [
            "Oksigen",
            "Nitrogen",
            "Karbon dioksida",
            "Hidrogen"
        ],
        correct: 2
    },
    {
        question: "Berapa lama waktu yang dibutuhkan botol plastik untuk terurai?",
        options: [
            "10 tahun",
            "50 tahun",
            "450 tahun",
            "1000 tahun"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById('startQuiz').addEventListener('click', startQuiz);
document.getElementById('nextButton').addEventListener('click', nextQuestion);
document.getElementById('retryButton').addEventListener('click', resetQuiz);

function startQuiz() {
    document.querySelector('.quiz-intro').style.display = 'none';
    document.querySelector('.quiz-content').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = quizData.length;
    updateProgress();
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);
    
    if (index === quizData[currentQuestion].correct) {
        options[index].classList.add('correct');
        score++;
    } else {
        options[index].classList.add('wrong');
        options[quizData[currentQuestion].correct].classList.add('correct');
    }
    
    document.getElementById('nextButton').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
        document.getElementById('nextButton').style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector('.quiz-content').style.display = 'none';
    document.querySelector('.quiz-result').style.display = 'block';
    
    document.getElementById('score').textContent = score;
    
    const message = score > 3 ? 
        "Selamat! Pengetahuan lingkungan Anda sangat baik!" : 
        "Terus belajar untuk meningkatkan pengetahuan tentang lingkungan!";
    
    document.getElementById('resultMessage').textContent = message;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.querySelector('.quiz-result').style.display = 'none';
    document.querySelector('.quiz-intro').style.display = 'block';
}