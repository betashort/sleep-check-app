import React from "react";
import { IAISSelfCheckFormQuestion } from "../shared/interface/aisSelfCheckForm";
import { SubmitHandler, useForm } from "react-hook-form";

function AISSelfCheckPage() {
  // useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAISSelfCheckFormQuestion>();
  // const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  return (
    <>
      <h2 className="p-4 text-xl text-center">アテネ不眠尺度(AIS)による不眠症セルフチェック</h2>
      <div className="p-4 flex justify-center items-center">
      <table className="">
        <tr>
          <th className=" border border-slate-900">質問</th>
          <th className="border border-slate-900">回答</th>
        </tr>
        <tr>
          <td className="border border-slate-900">ベッドについてから実際に寝るまで、時間がかかりましたか？</td>
          <td className="border border-slate-900">
            <form>
              <ul>
                <li>
                  <input type="radio" name="Q1" /> いつもより寝つきがよかった
                </li>
                <li>
                  <input type="radio" name="Q1" /> いつもより少し時間がかかった
                </li>
                <li>
                  <input type="radio" name="Q1" />{" "}
                  いつもよりかなり時間がかかった
                </li>
                <li>
                  <input type="radio" name="Q1" />{" "}
                  いつもより非常に時間がかかった、あるいは全く眠れなかった
                </li>
              </ul>
            </form>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-900">ベッドについてから実際に寝るまで、時間がかかりましたか？</td>
          <td className="border border-slate-900">
            <ul>
              <li>いつもより寝つきがよかった</li>
              <li>いつもより少し時間がかかった</li>
              <li>いつもよりかなり時間がかかった</li>
              <li>いつもより非常に時間がかかった、あるいは全く眠れなかった</li>
            </ul>
          </td>
        </tr>
      </table>
      </div>
    </>
  );
}

export default AISSelfCheckPage;
