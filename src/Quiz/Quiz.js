import { React, useState } from "react";
import "./Quiz.css";
import { questions } from "./questions";

const Quiz = () => {
  const [newQuest, setNewQuest] = useState(questions[0]);
  const [finalScore, setFinalScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    let index = questions.indexOf(newQuest);
    index++;

    if (isCorrect) {
      setFinalScore(finalScore + 1);
    }

    if (index % questions.length === 0) {
      index = 0;
      setShowScore(true);
    }

    setNewQuest(questions[index]);
  };

  const resetQuiz = () => {
    setFinalScore(0);
    setShowScore(false);
    setNewQuest(questions[0]);
  };

  return (
    <div className="container">
      {showScore ? (
        <>
          <div className="score">
            You scored {finalScore} out of 4{" "}
            <button onClick={() => resetQuiz()}>Try again</button>
          </div>
        </>
      ) : (
        <>
          <div className="question">
            <div>Question {newQuest.id}/4</div>
            <div>{newQuest.questionText}</div>
          </div>
          <div className="options">
            {newQuest.answerOptions.map((item, index) => {
              return (
                <button key={index} onClick={() => handleClick(item.isCorrect)}>
                  {item.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
