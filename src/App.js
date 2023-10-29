import React, { useEffect, useReducer } from "react";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import NextButton from "./components/NextButton/NextButton";
import Progress from "./components/Progress/Progress";
import Question from "./components/Question/Question";
import ScoreSection from "./components/ScoreSection/ScoreSection";
import StarterPage from "./components/StarterPage/StarterPage";

const initialState = {
  questions: [],
  //loading - error - ready - active - finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + 1
            : state.points,
      };
    case "newQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    default:
      throw new Error("action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StarterPage numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress
            index={index}
            numQuestions={numQuestions}
            points={points}
            maxPossiblePoint={maxPossiblePoints}
            answer={answer}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
            numQuestions={numQuestions}
            index={index}
          />
        </>
      )}
      {status === "finished" && (
        <ScoreSection
          maxPossiblePoints={maxPossiblePoints}
          points={points}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default App;
