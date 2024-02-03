import "./Results.scss"
// eslint-disable-next-line react/prop-types
function Results({tryAgain,questions,rightAnswars, wrongAnswar}) {
  return (
    <div className="resultsContainer">
            <h2>Your result</h2>
          <p className="totalQuestions">Total Questions:  <span> {questions}</span></p>
          <p className="sotalScore">Your Level in React:  <span> {((100 / questions) * rightAnswars).toFixed(1)}%</span></p>
          <p className="correctAnswers">Correct Answers:  <span> {rightAnswars}</span> </p>
          <p className="wrongAnswers">Wrong Answers:  <span> {wrongAnswar}</span></p>
         <button type="button" onClick={tryAgain}>
          Try Again
         </button>
          </div>
  )
}

export default Results
