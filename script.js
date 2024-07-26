// List of questions and answers
const questions = [
    { 
        "question": "What is the capital of France?", 
        "answer": "paris" 
    },
    { 
        "question": "What is the capital of Japan?", 
        "answer": "tokyo" 
    },
    {
        "question": "What is 1+1?",
        "answer": "2"
    },
    {
        "question": "What is the city in Japan we have been to together?",
        "answer": "okinawa"
    },
    {
        "question": "What date is my birthday? (mmdd, e.g. 0101)",
        "answer": "0301"
    },
    {
        "question": "What is the name of my favorite country music song?",
        "answer": "letter to me"
    },
    {
        "question": "What is the brand of the car we rented in Japan?",
        "answer": "toyota"
    },
    {
        "question": "Am I handsome?",
        "answer": "yes"
    },
    {
        "question": "How many interviews did I go through to get the job at Micron? (in Arabic number)",
        "answer": "1"
    },
    {
        "question": "What food did I like most when we traveled in Japan?",
        "answer": "ramen"
    },
    {
        "question": "Which language is my sister more fluent in, English or Korean?",
        "answer": "korean"
    },
    {
        "question": "When traveling, do I like to take suitcase or backpack more?",
        "answer": "suitcase"
    },
    {
        "question": "Do I like public transportation?",
        "answer": "no"
    },
    {
        "question": "What is the brand of the car we rented to Lukang and the outlet?",
        "answer": "nissan"
    },
    {
        "question": "What fruit did we add to the pancakes we made in my home?",
        "answer": "banana"
    },
    {
        "question": "Have I been to Germany?",
        "answer": "no"
    },
    {
        "question": "Have I been to Korea?",
        "answer": "no"
    },
    {
        "question": "Which fruit do I like more, strawberries or bananas?",
        "answer": "bananas"
    },
    {
        "question": "How many countries in Europe have I been to? (in Arabic number)",
        "answer": "8"
    },
    {
        "question": "What is the first name of my favorite basketball player?",
        "answer": "kobe"
    },
    {
        "question": "We went to Daan Park for a coffee. What's the name of the café?",
        "answer": "louisa"
    },
    {
        "question": "We went to a café in Taichung and had great cinnamon rolls. What's the name of the café?",
        "answer": "peacocks"
    },
    {
        "question": "What drink did you crave for at Family Mart?",
        "answer": "matcha milk"
    },
    {
        "question": "In what month did the big typhoon hit Taiwan?",
        "answer": "july"
    },
    {
        "question": "What major did I take for my Bachelor's?",
        "answer": "economics"
    },
    {
        "question": "What means of transportation did I mostly take to find you when you lived in the NTU dorm?",
        "answer": "youbike"
    },
    {
        "question": "What kind of coffee that I like a lot did you give me as a gift from Korea?",
        "answer": "black coffee"
    },
    {
        "question": "What is the name of the movie series that we actually finished watching?",
        "answer": "the hangover"
    },
    {
        "question": "Can I drive in the EU?",
        "answer": "yes"
    },
    {
        "question": "What is your Chinese name?",
        "answer": "安梅娜"
    },
    {
        "question": "What was the big motivation I learned Dutch -- to ' '? (you only need one verb)",
        "answer": "trashtalk"
    },
    {
        "question": "Is my best friend's name Allen or Alan?",
        "answer": "allen"
    },
    {
        "question": "'I like you' in German is pronounced similar to what phrase in English to my friends?",
        "answer": "eat my dick"
    },
    {
        "question": "What is my Chinese name?",
        "answer": "史勝安"
    },
    {
        "question": "What letter do I have problems pronouncing in German?",
        "answer": "l"
    },
    {
        "question": "Where did we have our first and lots of dates?",
        "answer": "riverside"
    },
    {
        "question": "What kind of alcohol do I dislike?",
        "answer": "whiskey"
    }
    // Add more questions as needed
];

// List of image URLs
const images = [
    "https://raw.githubusercontent.com/Andy-SA-Shih/AA/main/IMG_4011.jpg",
    "https://raw.githubusercontent.com/Andy-SA-Shih/AA/main/IMG_4017.jpg",
    "https://raw.githubusercontent.com/Andy-SA-Shih/AA/main/IMG_4023.jpg",
    "https://raw.githubusercontent.com/Andy-SA-Shih/AA/main/IMG_4025.jpg"
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

// Function to display a random image
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    console.log("Random image source:", randomImage); // Log the image source to the console
    const imageElement = document.getElementById('random-image');
    imageElement.src = randomImage;
    imageElement.style.display = 'block';
    document.getElementById('image-container').style.display = 'block'; // Show the image container
    document.getElementById('next-question-container').style.display = 'block'; // Show the next question button
    document.getElementById('question-container').style.display = 'none'; // Hide the question container
    document.getElementById('next-question-button').focus(); // Set focus on the next question button
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
