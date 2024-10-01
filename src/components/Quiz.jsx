import React, { useState } from 'react';
import Question from './Question';

const questions = [
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'Capital of France?', options: ['Berlin', 'Paris', 'Rome', 'Madrid'], answer: 'Paris' },
  { question: 'color of crow?', options: ['yellow', 'green', 'black', 'red'], answer: 'black' },
  { question: 'capital of india?', options: ['mumbai', 'delhi', 'kerala', 'goa'], answer: 'delhi' },
  { question: 'how many minutes in a week?', options: ['10500', '10080', '18000', '10070'], answer: '10080' },
  { question: 'How many dots appear on a pair of dice? ', options: ['43', '52', '46', '42'], answer: '42' },
  { question: 'Aureolin is a shade of what color?', options: ['yellow', 'blue', 'red', 'green'], answer: 'yellow' },
  { question: 'What is the 4th letter of the Greek alphabet? ', options: ['delta', 'beta', 'alpha', 'sigma'], answer: 'delta' },
  { question: 'total movies of vijay?', options: ['67', '78', '69', '60'], answer: '69' },
  { question: 'What company was initially known as "Blue Ribbon Sports" ?', options: ['puma', 'nike', 'adidas', 'reboack'], answer: 'nike' },

  
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
