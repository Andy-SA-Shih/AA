// List of questions and answers
const questions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Japan?", answer: "tokyo" },
    // Add more questions as needed
];

// List of image URLs
const images = [
    "https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_1",
    "https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_2",
    "https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_3",
    // Add more image URLs
];

let currentQuestionIndex = 0;

// Function to display a random question
function displayRandomQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = ""; // Clear the input field
    document.getElementById('answer').focus(); // Set focus on the answer input field
    document.getElementById('random-image').style.display = 'none'; // Hide the image
    document.getElementById('next-question-container').style.display = 'none'; // Hide the next question button
    document.getElementById('question-container').style.display = 'block'; // Show the question container
    document.getElementById('image-container').style.display = 'none'; // Hide the image container
}

// Function to check the answer and display a random image
function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase();
    if (answer === questions[currentQuestionIndex].answer) {
        displayRandomImage();
    } else {
        alert('Wrong answer. Try again!');
    }
}

// Function to display a random image
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imageElement = document.getElementById('random-image');
    imageElement.src = randomImage;
    imageElement.style.display = 'block';
    document.getElementById('image-container').style.display = 'block'; // Show the image container
    document.getElementById('next-question-container').style.display = 'block'; // Show the next question button
    document.getElementById('question-container').style.display = 'none'; // Hide the question container
    document.getElementById('next-question-button').focus(); // Set focus on the next question button
}

// Function to load the next question
function nextQuestion() {
    displayRandomQuestion();
}

// Function to handle the "Enter" key press
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('question-container').style.display === 'block') {
            event.preventDefault(); // Prevent the form from submitting
            checkAnswer();
        } else if (document.getElementById('next-question-container').style.display === 'block') {
            event.preventDefault(); // Prevent the form from submitting
            nextQuestion();
        }
    }
}

// Initialize the quiz with a random question
displayRandomQuestion();
