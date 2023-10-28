import React from "react";
function ScoreSection({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div className="w-1/3 m-auto mt-32 bg-[#F3ECF5] p-10 rounded-lg shadow-xl text-center">
      <p className="mb-6">
        you scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="bg-[#E581FE] w-36 h-12 font-bold rounded"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ScoreSection;
