import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./components/constant";

function App() {
  
  return (
    <>
      <Quiz questions={jsQuizz.questions} />
    </>
  );
}

export default App;
