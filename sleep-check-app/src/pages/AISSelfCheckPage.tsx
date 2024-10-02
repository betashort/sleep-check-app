import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ANSWERCHOICES,
  CHOICELIST,
  QUESTIONS,
} from "../assets/data/aisSelfCheckQA";
import AISSelfCheckModal from "../shared/component/AISSelfCheckModal";

type IQA = {
  [question: string]: number;
};

function AISSelfCheckPage() {
  // useState
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [scoreReview, setScoreReview] = useState("");
  // useForm
  const { register, watch } = useForm<IQA>();

  //Open Modal
  const CheckShowModal = () => {
    setShowModal(true);
  };
  //Calculate AIS Score
  function CheckAISScore() {
    let tmpScore = 0;
    const scoreList = Object.values(watch());
    for (let i = 0; i < scoreList.length; i++) {
      tmpScore += Number(scoreList[i]);
    }
    setScore(tmpScore);

    console.log(tmpScore);
    if (tmpScore <= 3) {
      setScoreReview("睡眠がとれています。");
    } else if (tmpScore <= 5) {
      setScoreReview("不眠症の疑いありです。");
    } else {
      setScoreReview("不眠症の可能性が高いです。");
    }
  }

  const HandleCheckAISScore = () => {
    CheckAISScore();
    CheckShowModal();
    console.log(showModal);
  };

  return (
    <div className="z-0">
      <h2 className="p-4 text-xl text-center">
        アテネ不眠尺度(AIS)による不眠症セルフチェック
      </h2>
      <div className="p-4 flex justify-center items-center">
        <table className="">
          <thead>
            <tr>
              <th className="border bg-slate-400">質問</th>
              <th className="border bg-slate-400">回答</th>
            </tr>
          </thead>
          <tbody>
            {ANSWERCHOICES.map((answerChoice) => {
              const keyQuestion: string = Object.keys(answerChoice)[0];
              return (
                <>
                  <tr>
                    <td className="border">{QUESTIONS[keyQuestion]}</td>
                    <td className="border">
                      <form>
                        <ul>
                          {CHOICELIST.map((choice) => {
                            return (
                              <li key={keyQuestion + choice}>
                                <label key={choice}>
                                  <input
                                    type="radio"
                                    value={
                                      answerChoice[keyQuestion][choice].score
                                    }
                                    {...register(keyQuestion, { required: "" })}
                                  />
                                  {answerChoice[keyQuestion][choice].label}
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </form>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        <button
          className=" text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={HandleCheckAISScore}
        >
          評価
        </button>
      </div>
      <div>
        <AISSelfCheckModal
          showModal={showModal}
          setShowModal={setShowModal}
          score={score}
          scoreReview={scoreReview}
        />
      </div>
    </div>
  );
}

export default AISSelfCheckPage;
