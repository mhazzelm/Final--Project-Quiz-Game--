import React, { useState } from 'react';
import './App.css';

const levels = ['easy', 'medium', 'hard'];

const questions = {
  easy: [
    {
      id: 1,
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
      explanation: 'HTML stands for Hyper Text Markup Language. It is used for creating the structure of a web page.',
    },
    {
      id: 2,
      question: 'What does CSS stand for?',
      options: ['Counter Strike: Source', 'Corrective Style Sheet', 'Cascading Style Sheet'],
      correctAnswer: 'Cascading Style Sheet',
      explanation: 'CSS stands for Cascading Style Sheet. It is used to control the presentation and layout of HTML documents, providing a way to style web pages.',
    },
    {
      id: 3,
      question: 'What does JS stand for?',
      options: ['Java Source', 'JavaScript', 'Joomla Script'],
      correctAnswer: 'JavaScript',
      explanation: 'JS stands for JavaScript. It is a versatile scripting language used to add interactivity and dynamic behavior to web pages.',
    },
    {
      id: 4,
      question: 'What is the primary purpose of the <head> element in HTML?',
      options: ['It contains the main content of the document', 'It defines the structure of the document', 'It contains metadata about the document'],
      correctAnswer: 'It contains metadata about the document',
      explanation: 'The <head> element in HTML contains metadata about the document, such as title, links to stylesheets, and other information that doesnt appear directly on the page.',
    },
    {
      id: 5,
      question: 'How do you declare a variable in JavaScript?',
      options: ['let', 'var', 'both let and var'],
      correctAnswer: 'both let and var',
      explanation: 'In JavaScript, you can declare variables using let and var. Both are used to define variables, but let has block scope, and var has function scope.',
    },
    {
      id: 6,
      question: 'Which operator is used for concatenating strings in JavaScript?',
      options: ['+', '&', '*'],
      correctAnswer: '+',
      explanation: 'The + operator is used for string concatenation in JavaScript. It can join two or more strings together.',
    },
    {
      id: 7,
      question: 'What is the purpose of the CSS float property?',
      options: ['It specifies the alignment of an element', 'It floats an element to the right or left of its container', 'It controls the transparency of an element'],
      correctAnswer: 'It floats an element to the right or left of its container',
      explanation: 'The CSS float property is used to specify whether an element should be placed to the left or right of its container, allowing text and inline elements to wrap around it.',
    },
    {
      id: 8,
      question: 'What is the default behavior of the <a> (anchor) tag in HTML?',
      options: ['Opens a new tab', 'Navigates to the linked page in the same window', 'Downloads a file'],
      correctAnswer: 'Navigates to the linked page in the same window',
      explanation: 'By default, when you click on a link (<a> tag) in HTML, it navigates to the linked page in the same window.',
    },
    {
      id: 9,
      question: 'What is the purpose of the border-box value in CSS box-sizing property?',
      options: ['It adds padding and margin to the width and height of an element', 'It includes padding and border in the width and height of an element', 'It only includes the content in the width and height of an element'],
      correctAnswer: 'It includes padding and border in the width and height of an element',
      explanation: 'With box-sizing: border-box, the total width and height of an element include padding and border, making it easier to size elements.',
    },
    {
      id: 10,
      question: 'What is the role of the constructor method in a JavaScript class?',
      options: ['It initializes the class variables', 'It defines the properties of the class', 'It creates an instance of the class'],
      correctAnswer: 'It initializes the class variables',
      explanation: 'The constructor method in a JavaScript class is used for initializing class properties and setting up the object.',
    },
    // Add other easy-level questions
  ],
  medium: [
    {
      id: 1,
      question: 'What is the purpose of the localStorage object in JavaScript?',
      options: ['It is used to store session data on the server', 'It is used to store key-value pairs in the browser', 'It is used for making AJAX requests'],
      correctAnswer: 'It is used to store key-value pairs in the browser',
      explanation: 'The localStorage object is used to store key-value pairs in the browser for persistent data storage.',
    },
    {
      id: 2,
      question: 'What is the difference between let, const, and var in JavaScript for declaring variables?',
      options: ['let and const have block scope, while var has function scope', 'let has block scope, const has function scope, and var has global scope', 'let and const have global scope, while var has block scope'],
      correctAnswer: 'let and const have block scope, while var has function scope',
      explanation: 'let and const have block scope, which means they are limited to the block in which they are defined. var has function scope.',
    },
    {
      id: 3,
      question: 'What is the purpose of the this keyword in JavaScript?',
      options: ['It refers to the current function', 'It refers to the current object', 'It refers to the global object'],
      correctAnswer: 'It refers to the current object',
      explanation: 'In JavaScript, this refers to the current object, typically used in the context of object-oriented programming.',
    },
    {
      id: 4,
      question: 'What is the role of the fetch API in JavaScript?',
      options: ['It is used for asynchronous programming', 'It is used for making network requests', 'It is used for manipulating the DOM'],
      correctAnswer: 'It is used for making network requests',
      explanation: 'The Fetch API is used for making network requests (HTTP requests) in JavaScript, providing a more powerful and flexible way to handle network operations.',
    },
    {
      id: 5,
      question: 'What is a closure in JavaScript?',
      options: ['A function that is defined inside another function', 'A variable that is declared inside a loop', 'A built-in JavaScript object'],
      correctAnswer: 'A function that is defined inside another function',
      explanation: 'A closure is a function defined inside another function (the outer function) that has access to the outer functions variables. It "closes over" those variables.',
    },
    {
      id: 6,
      question: 'How can you prevent a form from submitting in JavaScript?',
      options: ['Use the event.stopPropagation() method', 'Use the event.preventDefault() method', 'Use the return false statement'],
      correctAnswer: 'Use the event.preventDefault() method',
      explanation: 'event.preventDefault() is used to stop the default action of an event, such as preventing a form from submitting.',
    },
    {
      id: 7,
      question: 'What is the purpose of the map function in JavaScript?',
      options: ['It creates a new array with the results of a function applied to each element', 'It modifies the existing array', 'It checks if every element in an array passes a test'],
      correctAnswer: 'It creates a new array with the results of a function applied to each element',
      explanation: 'The map function in JavaScript is used to create a new array by applying a function to each element of an existing array.',
    },
    {
      id: 8,
      question: 'How is a promise different from a callback in JavaScript?',
      options: ['A promise is used for asynchronous operations and provides better error handling', 'A callback is used for synchronous operations and provides better error handling', 'Both promise and callback serve the same purpose'],
      correctAnswer: 'A promise is used for asynchronous operations and provides better error handling',
      explanation: 'Promises are used for handling asynchronous operations and provide a cleaner and more structured way of handling asynchronous code compared to callbacks.',
    },
    {
      id: 9,
      question: 'What is the purpose of the box-shadow property in CSS?',
      options: ['It adds a shadow to the text inside a box', 'It adds a shadow to the border of a box', 'It adds a shadow to the entire box, including the content, padding, and border'],
      correctAnswer: 'It adds a shadow to the border of a box',
      explanation: 'The box-shadow property in CSS is used to add a shadow effect to an element, including its border.',
    },
    {
      id: 10,
      question: 'What is the concept of event delegation in JavaScript?',
      options: ['It involves handling events at the capturing phase', 'It involves using a single event listener to manage all the events for a group of elements', 'It involves preventing event propagation'],
      correctAnswer: '',
      explanation: 'Event delegation is a technique where a single event listener is used to manage a specific type of event for multiple elements. It involves leveraging event bubbling.',
    },
    // Add other medium-level questions here
  ],
  hard: [
    {
      id: 1,
      question: 'Explain the concept of hoisting in JavaScript.',
      options: ['It refers to the process of moving variables and function declarations to the top of their containing scope', 'It refers to the process of optimizing code for better performance', 'It refers to the process of minifying JavaScript code'],
      correctAnswer: 'It refers to the process of moving variables and function declarations to the top of their containing scope',
      explanation: 'Hoisting in JavaScript involves moving variables and function declarations to the top of their containing scope during the compilation phase.',
    },
    {
      id: 2,
      question: 'What is the value of "output" after executing the code?',
      image: 'images/hard2.png',
      options: ['120', '240', '360'],
      correctAnswer: '120',
      explanation: 'The manipulateArray function uses the reduce method to multiply all the elements of the array. The initial value of the accumulator is set to 1, and each element is multiplied to the accumulator. Therefore, the result is 2 * 3 * 4 * 5, which is 120. So, the correct answer is 120.',
    },    
    {
      id: 3,
      question: 'What is the difference between == and === in JavaScript for equality comparison?',
      options: ['== checks for both value and type equality, while === checks for value equality only', '== checks for value equality only, while === checks for both value and type equality', 'There is no difference; they are interchangeable'],
      correctAnswer: '== checks for both value and type equality, while === checks for value equality only',
      explanation: '=== is a strict equality operator that checks both value and type. == is a loose equality operator that performs type coercion.',
    },
    {
      id: 4,
      question: 'What is the value of "output" after executing the code?',
      image: 'images/hard4.png',
      options: ['[4, 8]', '[2, 6]', '[4, 12]'],
      correctAnswer: '[4, 8]',
      explanation: 'The arrayManipulation function first filters even values at even indices and then multiplies each value by 2 using the map function. So, for the input [1, 2, 3, 4, 5, 6], the filtered array is [2, 4], and after multiplication, the result is [4, 8]. Therefore, the correct answer is [4, 8].',
    },
    {
      id: 5,
      question: 'What is the purpose of the useEffect hook in React?',
      options: ['It is used for defining a function component', 'It is used for managing state in a class component', 'It is used for performing side effects in a function component'],
      correctAnswer: 'It is used for performing side effects in a function component',
      explanation: 'The useEffect hook in React is used for performing side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.',
    },
    {
      id: 6,
      question: 'Explain the concept of memoization in JavaScript.',
      options: ['It involves optimizing the performance of code by storing and reusing previously computed results', 'It involves optimizing the performance of code by storing and reusing previously computed results', 'It involves organizing code into modular components'],
      correctAnswer: 'It involves optimizing the performance of code by storing and reusing previously computed results',
      explanation: 'Memoization is an optimization technique where the results of expensive function calls are stored and reused when the same inputs occur again.',
    },
    {
      id: 7,
      question: 'What is the value of "result"?',
      image: 'images/hard7.png',
      options: ['5', '14', '23'],
      correctAnswer: '14',
      explanation: 'The calculateSum function calculates the sum of squares for numbers from 1 to n. For n = 3, the sum is 1^2 + 2^2 + 3^2, which equals 14. So, the correct answer is 14.',
    },
    {
      id: 8,
      question: 'What is the purpose of the SQL JOIN clause in database queries?',
      options: ['It combines rows from two or more tables based on a related column between them', 'It creates a new table by combining all rows from two or more tables', 'It filters rows from a single table based on a condition'],
      correctAnswer: 'It combines rows from two or more tables based on a related column between them',
      explanation: 'The SQL JOIN clause is used to combine rows from two or more tables based on a related column between them.',
    },
    {
      id: 9,
      question: 'What is the output of "processString(inputString)"?',
      image: 'images/hard9.png',
      options: ['GNIMMARGORP', 'programming', 'gpimmargorp'],
      correctAnswer: 'GNIMMARGORP',
      explanation: 'The processString function first reverses the characters in the string and then converts the result to uppercase. For the input "Programming", the reversed string is "gnimmargorP", and after converting to uppercase, the output is "GNIMMARGORP". Therefore, the correct answer is "GNIMMARGORP".',
    },
    {
      id: 10,
      question: 'Describe the differences between HTTP and HTTPS.',
      options: ['HTTP is a secure protocol, while HTTPS is not', 'HTTPS encrypts data transferred between the client and server, providing a secure communication channel', 'There is no difference; HTTP and HTTPS are the same'],
      correctAnswer: 'HTTPS encrypts data transferred between the client and server, providing a secure communication channel',
      explanation: 'HTTPS (Hypertext Transfer Protocol Secure) is a secure version of HTTP that encrypts data transferred between the client and server, ensuring a secure communication channel.',
    },
    // Add other hard-level questions here
  ],
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('easy');
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (option) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(option);

    const isCorrect = option === questions[selectedLevel][currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions[selectedLevel].length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 5000);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="App">
      <div className="header">DevMind Bender: Unleash Your Knowledge Mastery</div>
      <div className="level-bar">
        <div className="button-container">
          {levels.map((level) => (
            <button
              key={level}
              className={level === selectedLevel ? 'selected' : ''}
              onClick={() => handleLevelChange(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-container">
  {showScore ? (
    <div className="score-container">
      <h1 className="level-heading">Level: {selectedLevel}</h1>
      <div className="score">Your Score: {score} out of {questions[selectedLevel].length}</div>
      <p className="thanks">Thanks for playing!</p>
    </div>
  ) : (
    <>
  {questions[selectedLevel][currentQuestion].image && (
    <div className="code-image-container">
      <img src={`/${questions[selectedLevel][currentQuestion].image}`} alt="Code Example" />
    </div>
  )}
      <div className="question">{questions[selectedLevel][currentQuestion].question}</div>
      <div className="options-container">
        {questions[selectedLevel][currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`option ${selectedAnswer === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
            </div>
            {selectedAnswer !== null && (
              <div className="explanation-container">
                {selectedAnswer === questions[selectedLevel][currentQuestion].correctAnswer ? (
                  <>
                    <p className="correct-answer">CORRECT ANSWER</p>
                    <p className="explanation">{questions[selectedLevel][currentQuestion].explanation}</p>
                  </>
                ) : (
                  <>
                    <p className="correct-answer">INCORRECT ANSWER</p>
                    <p className="explanation">
                      The correct answer is: <span>{questions[selectedLevel][currentQuestion].correctAnswer}</span>.
                    </p>
                    <p className="explanation">{questions[selectedLevel][currentQuestion].explanation}</p>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;