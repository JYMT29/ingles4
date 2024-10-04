// Adjective list with positive form, comparative form, and corresponding sentences
const adjectives = [
    { positive: "big", comparative: "bigger", sentence: "The elephant is _____ than the mouse." },
    { positive: "small", comparative: "smaller", sentence: "The ant is _____ than the cat." },
    { positive: "fast", comparative: "faster", sentence: "A cheetah is _____ than a rabbit." },
    { positive: "slow", comparative: "slower", sentence: "A turtle is _____ than a hare." },
    { positive: "happy", comparative: "happier", sentence: "She is _____ today than yesterday." },
    { positive: "sad", comparative: "sadder", sentence: "He is _____ because he lost the game." },
    { positive: "strong", comparative: "stronger", sentence: "He is _____ than his brother." },
    { positive: "weak", comparative: "weaker", sentence: "After being sick, he felt _____ than before." },
    { positive: "young", comparative: "younger", sentence: "My sister is _____ than me." },
    { positive: "old", comparative: "older", sentence: "My grandfather is _____ than my father." },
    { positive: "rich", comparative: "richer", sentence: "She is _____ than her neighbors." },
    { positive: "poor", comparative: "poorer", sentence: "After losing his job, he became _____." },
    { positive: "short", comparative: "shorter", sentence: "This road is _____ than the other one." },
    { positive: "tall", comparative: "taller", sentence: "He is _____ than most of his classmates." },
    { positive: "beautiful", comparative: "more beautiful", sentence: "The sunset is _____ than the sunrise." },
    { positive: "interesting", comparative: "more interesting", sentence: "This book is _____ than the last one I read." },
    { positive: "dangerous", comparative: "more dangerous", sentence: "Climbing Everest is _____ than hiking a hill." },
    { positive: "funny", comparative: "funnier", sentence: "This comedian is _____ than the last one we saw." },
    { positive: "expensive", comparative: "more expensive", sentence: "This watch is _____ than my phone." },
    { positive: "cheap", comparative: "cheaper", sentence: "That shirt is _____ than this one." }
];

// Get DOM elements
const sentenceContainer = document.getElementById('sentence-container');
const comparativeInput = document.getElementById('comparative-input');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const resultDisplay = document.getElementById('result');

// Current adjective being used
let currentAdjective = {};

// Function to generate a new adjective and corresponding sentence
function generateAdjective() {
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    currentAdjective = adjectives[randomIndex];
    // Display sentence with a blank where the adjective should go
    sentenceContainer.textContent = currentAdjective.sentence;
    // Clear input and result display
    comparativeInput.value = "";
    resultDisplay.textContent = "";
}

// Function to check user's answer
function checkAnswer() {
    const userAnswer = comparativeInput.value.toLowerCase().trim();  // Normalize input
    const correctAnswer = currentAdjective.comparative.toLowerCase().trim();
    
    if (userAnswer === correctAnswer) {
        resultDisplay.textContent = "Correct!";
        resultDisplay.classList.add('correct');
        resultDisplay.classList.remove('incorrect');
    } else {
        resultDisplay.textContent = `Incorrect! The correct form is "${correctAnswer}".`;
        resultDisplay.classList.add('incorrect');
        resultDisplay.classList.remove('correct');
    }
}

// Add event listeners
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', generateAdjective);

// Initialize with a random adjective
generateAdjective();
