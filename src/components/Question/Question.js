import React from "react";
import Option from "../Options/Option";
function Question({ question, dispatch, answer }) {
  // console.log(question);
  return (
    <div className="w-2/5 m-auto mt-32 bg-[#F3ECF5] p-10 rounded-lg shadow-xl">
      <p className="text-4xl mb-7">{question.question}</p>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
