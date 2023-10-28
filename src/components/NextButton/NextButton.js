import React from "react";
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="bg-[#E581FE] w-36 h-12 font-bold rounded"
        onClick={() => dispatch({ type: "newQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="bg-[#E581FE] w-36 h-12 font-bold rounded"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
