import React from "react";
import Option from "../Options/Option";
import NextButton from "../NextButton/NextButton";
function Question({ question, dispatch, answer, numQuestions, index }) {
  // console.log(question);
  return (
    <div className="w-2/5 m-auto bg-[#F3ECF5] p-10 rounded-lg rounded-t-none shadow-xl">
      <p className="text-4xl mb-7">{question.question}</p>
      <Option question={question} dispatch={dispatch} answer={answer} />
      <div className="w-full text-right">
        <NextButton
          dispatch={dispatch}
          answer={answer}
          numQuestions={numQuestions}
          index={index}
        />
      </div>
    </div>
  );
}

export default Question;
