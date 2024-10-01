import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ANSWERCHOICES,
  CHOICELIST,
  IAnswerChoice,
  QUESTIONS,
} from "../assets/data/aisSelfCheckQA";

type IQA = {
  [question: string]: number;
};

function AISSelfCheckPage() {
  // useState
  const [score, setScore] = useState(0);
  // useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IQA>();

  let tmpScore = 0;
  function CheckAISScore() {
    const scoreList = Object.values(watch());
    for (let i = 0; i < scoreList.length; i++) {
      tmpScore += Number(scoreList[i]);
    }
    setScore(tmpScore);
    console.log(score);
  }

  return (
    <>
      <h2 className="p-4 text-xl text-center">
        アテネ不眠尺度(AIS)による不眠症セルフチェック
      </h2>
      <div className="p-4 flex justify-center items-center">
        <table className="">
          <tr>
            <th className="border bg-slate-400">質問</th>
            <th className="border bg-slate-400">回答</th>
          </tr>
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
                            <li>
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
        </table>
      </div>
      <div className="flex justify-center items-center">
        <button className=" text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  onClick={CheckAISScore}>評価</button>
      </div>
      <pre>{score}</pre>
    </>
  );
}

export default AISSelfCheckPage;
