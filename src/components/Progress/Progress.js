import React from "react";
function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div className="w-2/5 m-auto mt-24 bg-[#F3ECF5] p-10 rounded-lg rounded-b-none shadow-xl">
      <progress
        className="w-11/12 ml-2.5"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <div className="flex w-11/12 justify-between ml-2.5">
        <p className="mb-5">
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/{maxPossiblePoints} points
        </p>
      </div>
    </div>
  );
}

export default Progress;
