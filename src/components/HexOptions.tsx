import { useState } from "react";
import randomString from "../utils/randomString";
import shuffle from "../utils/shuffleArray";
import Footer from "./Footer";
import Header from "./Header";

const HexOptions = () => {
  const generatedHex = randomString(6);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    setIsGameRunning(true);
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
      setIsGameRunning(false);
    }
  };

  const handlePlayAgainButtonClick = () => {
    setIsGameRunning(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const questions = [
    {
      answerOptions: [
        { answerText: randomString(6), isCorrect: false },
        { answerText: randomString(6), isCorrect: false },
        { answerText: generatedHex, isCorrect: true },
      ],
    },
    {
      answerOptions: [
        { answerText: randomString(6), isCorrect: false },
        { answerText: randomString(6), isCorrect: false },
        { answerText: generatedHex, isCorrect: true },
      ],
    },
    {
      answerOptions: [
        { answerText: randomString(6), isCorrect: false },
        { answerText: randomString(6), isCorrect: false },
        { answerText: generatedHex, isCorrect: true },
      ],
    },
    {
      answerOptions: [
        { answerText: randomString(6), isCorrect: false },
        { answerText: randomString(6), isCorrect: false },
        { answerText: generatedHex, isCorrect: true },
      ],
    },
    {
      answerOptions: [
        { answerText: randomString(6), isCorrect: false },
        { answerText: randomString(6), isCorrect: false },
        { answerText: generatedHex, isCorrect: true },
      ],
    },
  ];

  const newArray = shuffle(questions[currentQuestion].answerOptions);

  return (
    <>
      {showScore && !isGameRunning ? (
        <div className="show-score">
          <h1>
            You scored <span>{score}</span> out of {questions.length}!
          </h1>
          <button onClick={() => handlePlayAgainButtonClick()}>
            Play Again
          </button>
        </div>
      ) : (
        <>
          <Header />
          <div
            className="show-color"
            style={{
              backgroundColor: generatedHex ? `#` + `${generatedHex}` : "red",
            }}
          ></div>
          <div className="answer-section">
            {newArray.map((answerOptions, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default HexOptions;
