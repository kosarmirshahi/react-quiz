import React from "react";
function ScoreSection() {
  return (
    <div className="w-1/3 m-auto mt-32 bg-[#F3ECF5] p-10 rounded-lg shadow-xl text-center">
      <p className="mb-6">you access 100/150</p>
      <button className="bg-[#E581FE] w-36 h-12 font-bold rounded">
        Restart Quiz
      </button>
    </div>
  );
}

export default ScoreSection;
