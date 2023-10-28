// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
function StarterPage({ numQuestions, dispatch }) {
  return (
    <div className="w-3/4 mx-auto mt-32 text-center text-white">
      <h1 className="text-5xl mb-10">Welcome to the React Quiz</h1>
      <p className="text-2xl mb-10">{numQuestions} Questions!</p>
      <p className="text-2xl mb-14">Let's go. Good luck!!</p>
      <button
        className="bg-[#EEACFF] w-36 h-12 font-bold rounded"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StarterPage;
