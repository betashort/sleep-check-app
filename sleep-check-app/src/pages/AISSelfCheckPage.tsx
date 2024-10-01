import React from "react";
import { IAISSelfCheckFormAnswer } from "../shared/interface/aisSelfCheckForm";
import { SubmitHandler, useForm } from "react-hook-form";

function AISSelfCheckPage() {
  // useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAISSelfCheckFormAnswer>();
  const onSubmit: SubmitHandler<IAISSelfCheckFormAnswer> = (data) => console.log(data);
  return (
    <>
      <h2 className="p-4 text-xl text-center">
        アテネ不眠尺度(AIS)による不眠症セルフチェック
      </h2>
      <div className="p-4 flex justify-center items-center">
        <table className="">
          <tr>
            <th className=" border border-slate-900">質問</th>
            <th className="border border-slate-900">回答</th>
          </tr>
          <tr>
            <td className="border border-slate-900">
              ベッドについてから実際に寝るまで、時間がかかりましたか？
            </td>
            <td className="border border-slate-900">
              <form>
                <ul>
                  <li>
                    <label>
                      <input type="radio" value={0} {...(register("score"), {required:true, name:"Q1"})} />
                      いつもより寝つきがよかった
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" value={1} {...(register("score"), {required:true, name:"Q1"})} />
                      いつもより少し時間がかかった
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" value={2} {...(register("score"), {required:true, name:"Q1"})} />
                      いつもよりかなり時間がかかった
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" value={3} {...(register("score"), {required:true, name:"Q1"})} />
                      いつもより非常に時間がかかった、あるいは全く眠れなかった
                    </label>
                  </li>
                </ul>
              </form>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-900">
              夜間、睡眠の途中で目が覚めましたか？
            </td>
            <td className="border border-slate-900">
              <form>
                <ul>
                  <li>
                    <label>
                      <input type="radio" name="Q1" />
                      問題になるほどのことはなかった
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="Q1" />
                      少し困ることがある
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="Q1" />
                      かなり困っている
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" name="Q1" />
                      深刻な状態、あるいは全く眠れなかった
                    </label>
                  </li>
                </ul>
              </form>
            </td>
          </tr>
        </table>

        <button>評価</button>
      </div>
    </>
  );
}

export default AISSelfCheckPage;
