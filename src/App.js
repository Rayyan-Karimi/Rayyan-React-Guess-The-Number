import { useState } from "react";
import "./App.css";


function Hero() {
  return (
    <div className="py-6 text-center shadow-lg">
      <h2>Guess The Number</h2>
    </div>
  );
}

function Main() {
  const number = Math.floor(Math.random() * 101);
  const [guess, setGuess] = useState(1);
  const [result, setResult] = useState("");

  const handleCorrect = () => {
    setResult("Correct answer");
    // disableCheckButton();
  };

  const handleIncorrect = () => {
    if (number > guess) {
      setResult("Number is greater than your guess");
    } else {
      setResult("Number is less than your guess");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-indigo-700 w-5/6 md:w-2/3">
      <div className="heading">Guess a number between 0 and 100</div>
      <input
        type="number"
        className="border-[1px] border-black w-3/4"
        value={guess}
        onChange={(e) => setGuess(parseInt(e.target.value))}
      />
      <div className="buttons w-3/4 flex flex-col md:flex-row md:justify-around">
        <button
          className="w-full md:w-2/5 py-2 bg-slate-300 mt-3 mb-2"
          onClick={() =>
            setResult(guess === number ? handleCorrect : handleIncorrect)
          }
        >
          Reset
        </button>
        <button
          className="w-full md:w-2/5 py-2 bg-slate-300 mt-3 mb-2"
          onClick={() =>
            setResult(guess === number ? handleCorrect : handleIncorrect)
          }
        >
          Check
        </button>
      </div>
      <div>
        {result} because number is {number}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Hero></Hero>
      <Main></Main>
    </div>
  );
}

export default App;
