// Word arrays for random selection
const wordList = {
    somali: ["Wiil", "Hooyo", "Aabe", "Guri", "Qalin"], // Somali words
    english: ["Boy", "Mother", "Father", "House", "Pen"]  // English words
  };
  
  // Translation pairs
  const translationPairs = {
    "Wiil": "Boy",
    "Hooyo": "Mother",
    "Aabe": "Father",
    "Guri": "House",
    "Qalin": "Pen",
    "Boy": "Wiil",
    "Mother": "Hooyo",
    "Father": "Aabe",
    "House": "Guri",
    "Pen": "Qalin"
  };
  
  // Language translations
  const translations = {
    somali: {
      selectLanguageLabel: "Dooro Luqadda:",
      mainTitle: "Baro Erayo",
      mainDescription: "Baro Erayo Cusub oo luqad kale ah",
      translationLabel: "U Turjun Eraygan English",
      translationInput: "Gali Halkaan Jawaabta",
      submitBtn: "Gudbi",
      resetBtn: "Masax",
      correctMessage: "Jawaabtaadu waa: sax",
      wrongMessage: "Jawaabtaadu waa: qaldan"
    },
    english: {
      selectLanguageLabel: "Select Language:",
      mainTitle: "Learn Words",
      mainDescription: "Learn new words in another language",
      translationLabel: "Translate this word to Somali",
      translationInput: "Enter your answer here",
      submitBtn: "Submit",
      resetBtn: "Reset",
      correctMessage: "Your answer is: correct",
      wrongMessage: "Your answer is: incorrect"
    }
  };
  
  // Current word and language for validation
  let currentWord = "";
  let currentLanguage = "somali";  // Default language is Somali
  
  // Function to get a random word from the list
  function getRandomWord(language) {
    const words = wordList[language];
    currentWord = words[Math.floor(Math.random() * words.length)];
    return currentWord;
  }
  
  // Function to change the language and randomize the word
  function changeLanguage(language) {
    currentLanguage = language;  // Update the current language
    document.getElementById('selectLanguageLabel').innerText = translations[language].selectLanguageLabel;
    document.getElementById('mainTitle').innerText = translations[language].mainTitle;
    document.getElementById('mainDescription').innerText = translations[language].mainDescription;
    document.getElementById('translationLabel').innerText = translations[language].translationLabel;
    
    // Random word from the selected language
    document.getElementById('wordInput').value = getRandomWord(language);
    
    document.getElementById('translationInput').placeholder = translations[language].translationInput;
    document.getElementById('submitBtn').innerText = translations[language].submitBtn;
    document.getElementById('resetBtn').innerText = translations[language].resetBtn;
    
    // Clear the result message when the language changes
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('resultMessage').style.display = 'none'; // Hide the result message
  }
  
  // Function to validate the user's input
  function validateAnswer() {
    const userAnswer = document.getElementById('translationInput').value.trim();
    const correctAnswer = translationPairs[currentWord];  // Find the correct translation from pairs
    
    const resultMessage = document.getElementById('resultMessage');
    
    // Check if the user's answer matches the correct answer
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      resultMessage.innerText = translations[currentLanguage].correctMessage; // Use the correct language message
      resultMessage.style.backgroundColor = 'green';  // Green background for correct answer
      // Add border-radius and padding for styling
    resultMessage.style.borderRadius = '10px';  // Rounded corners
    resultMessage.style.padding = '10px';       // Padding around the text
      resultMessage.style.color = 'white';
    } else {
      resultMessage.innerText = translations[currentLanguage].wrongMessage;  // Use the correct language message
      resultMessage.style.backgroundColor = 'red';  // Red background for incorrect answer
      // Add border-radius and padding for styling
    resultMessage.style.borderRadius = '10px';  // Rounded corners
    resultMessage.style.padding = '10px';       // Padding around the text
      resultMessage.style.color = 'white';
    }
    
    resultMessage.style.display = 'block';  // Show the result message
  }
  
  // Initial language set to Somali with random word
  changeLanguage('somali');
  
  // Event listener for the language dropdown
  document.getElementById('language').addEventListener('change', function () {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
  });
  
  // Event listener for the submit button
  document.getElementById('submitBtn').addEventListener('click', function () {
    validateAnswer();
  });
  
  // Event listener for the reset button
  document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('translationInput').value = '';  // Clear the input field
    document.getElementById('resultMessage').style.display = 'none';  // Hide the result message
  });
  