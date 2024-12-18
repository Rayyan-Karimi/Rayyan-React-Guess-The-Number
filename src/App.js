import { useState } from "react";
import "./App.css";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg w-full text-xl font-semibold">
      <h2>Guess The Number</h2>
    </div>
  );
}

function Main() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState(1);
  const [result, setResult] = useState(null);
  const [isCheckDisabled, setIsCheckDisabled] = useState(false);

  const handleCorrect = () => {
    setResult("Correct answer 🎉");
    setIsCheckDisabled(true);
  };

  const handleIncorrect = () => {
    if (number > guess) {
      setResult(
        <>
          Number is <span className="font-semibold">greater</span> than your
          guess {number}
        </>
      );
    } else {
      setResult(
        <>
          Number is <span className="font-semibold">less</span> than your guess{" "}
          {number}
        </>
      );
    }
  };

  const handleCheck = () => {
    if (number === guess) {
      handleCorrect();
    } else {
      handleIncorrect();
    }
  };

  const handleReset = () => {
    setNumber(Math.floor(Math.random() * 101));
    setGuess(1);
    setResult(null);
    setIsCheckDisabled(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-5/6 md:w-2/3 mt-6">
      <div className="heading">Guess a number between 0 and 100</div>
      <form
        className="w-full flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleCheck();
        }}
      >
        <input
          type="number"
          className="border-[1px] border-black w-3/4 mt-2 text-center p-2 text-sm"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
        />
        <div className="buttons w-3/4 flex flex-col md:flex-row md:justify-around">
          <button
            className="w-full md:w-2/5 py-2 bg-slate-200 hover:bg-slate-300 mt-3 mb-2"
            onClick={handleReset}
            type="button"
          >
            Reset
          </button>
          <button
            className={`w-full md:w-2/5 py-2 ${
              isCheckDisabled
                ? "bg-slate-100"
                : "bg-slate-200 hover:bg-slate-300"
            } mt-3 mb-2`}
            onClick={handleCheck}
            disabled={isCheckDisabled}
            type="submit"
          >
            Check
          </button>
        </div>
      </form>

      <div>{result}</div>
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
