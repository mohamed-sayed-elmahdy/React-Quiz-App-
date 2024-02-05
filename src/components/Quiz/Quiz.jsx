/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Quiz.scss";
import Timer from "../Timer/Timer";
import Results from "../Results/Results";
import { Light } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { FaLinkedin, FaWhatsapp,FaGithub } from 'react-icons/fa';
import { SiUpwork } from "react-icons/si";


function Quiz({ questions }) {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const { question, choices, correctAnswer, code } = questions[currentQuestion];
  const [green, setGreen] = useState(null);
  const [disable, setDisable] = useState(null);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [rightAnswars, setrightAnswars] = useState(0);
  const [wrongAnswar, setWrongAnswar] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [key, setKey] = useState(Date.now()); // Add key state
  const [right, setRight] = useState(null); // Add key state




  const nextQuestion = () => {
    setRight(null);
    setDisable(null);
    setGreen(null);
    setAnswerIdx(null);
    setKey(Date.now()); // Change the key to force Timer to remount


    if (currentQuestion !== questions.length - 1) {
      setcurrentQuestion((prev) => prev + 1);
    } else {
      setcurrentQuestion(0);
      setShowResult(true);
    }
  };

  const checkAnswar = (answar, index) => {
    setRight("right")

    setAnswerIdx(index);
    setDisable("disable");
    if (answar === correctAnswer) {
      setGreen("green");
      setrightAnswars((prev) => prev + 1);
    } else {
      setGreen("red");
      setWrongAnswar((prev) => prev + 1);
    }
  };

  const tryAgain = () => {
    setShowResult(false);
    setrightAnswars(0);
    setWrongAnswar(0);
  };

  const handleTimeout = () => {
    // Move to the next question when the timer reaches 0
    nextQuestion();
  };

  const CodeBox = (code) => {
    return (
      <Light language="javascript" style={atomOneDark}>
        {code}
      </Light>
    );
  };

  return (
    <div className="main">
    <div className="quiz-container">
      {!showResult ? (
        <>
          <h1 className="title">React Test</h1>

          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question"> / {questions.length}</span>
          <h2 className="question-container">{question}</h2>
          {code ? CodeBox(code) : null}
          <ul className="answars-container">
            {choices.map((choice, index) => (
              <li
                className={`"answar" ${answerIdx === index ? green : disable} ${choice === correctAnswer ? right : null}`}
                key={choice}
                onClick={() => checkAnswar(choice, index)}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className="footer">
            <Timer
              onTimeout={handleTimeout}
              className="timer"
              key={key}
            />
            <button
              type="button"
              onClick={nextQuestion}
              disabled={answerIdx === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <Results
          tryAgain={tryAgain}
          rightAnswars={rightAnswars}
          wrongAnswar={wrongAnswar}
          questions={questions.length}
        />
      )}
    </div>
    <div className="about-me">
  <h3>About Me</h3>
  <p>
    Hi there! I'm <span> Mohamed Sayed Elmahdy</span>, a passionate front-end developer with a love for creating
    interactive and user-friendly web applications.
  </p>
  <p className="two">
    I specialize in technologies such as JavaScript, React, and Next.js. My goal is to
    combine creativity and technical skills to build engaging and visually appealing
    websites. Whether it's crafting pixel-perfect user interfaces or solving coding
    challenges, I enjoy the process of bringing ideas to life on the web.
  </p>
  {/* Icons with Links */}
  <div className="social-links">
    <a href="https://www.linkedin.com/in/mohamed-sayed-elmahdy-23653b220/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin /> 
    </a>
    <a href="https://www.upwork.com/freelancers/~015f2bc0f6b5aa7d75" target="_blank" rel="noopener noreferrer">
    <SiUpwork />
    </a>
    <a href="https://wa.me/+201101987074" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp /> 
    </a>
    <a href="https://github.com/mohamed-sayed-elmahdy" target="_blank" rel="noopener noreferrer">
    <FaGithub />
    </a>
  </div>
  </div>
    </div>
  );
}

export default Quiz;
