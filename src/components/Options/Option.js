import React from "react";
function Option({ question, dispatch, answer }) {
  // console.log(question);
  const hasAnswered = answer !== null;
  return (
    <div className="mb-9 ml-7 text-1xl">
      {question.options.map((option, index) => (
        <ul
          className={`mb-3 cursor-pointer ${index === answer ? "answer" : ""}
          ${
            hasAnswered
              ? index === question.correctOption
                ? "bg-lime-300"
                : "bg-red-400"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </ul>
      ))}
    </div>
  );
}

export default Option;
