import React from "react";

function SleepCheckSheetPage() {
  return (
    <>
      <h2 className="text-center">SleepCheckSheetPage</h2>
      <div className="p-4">
        <form>
          <h3>睡眠状態</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" /> 昼間に強い眠気を感じる
              </label>
            </li>
            <li>
              <input type="checkbox" /> 日中、いつでもどこでもすぐに眠れる
            </li>
            <li>
              <input type="checkbox" />{" "}
              休日に長時間眠って、平日よりも2時間以上寝だめをしている
            </li>
            <li>
              <input type="checkbox" /> 睡眠時間や、就寝時刻・起床時間がばらばら
            </li>
            <li>
              <label>
                <input type="checkbox" />{" "}
                寝つきが悪い・夜中や早朝に何度も目が覚める・熟睡感や休養感がない
              </label>
            </li>
            <li>
              <input type="checkbox" /> いびきを人に指摘されたことがある
            </li>
            <li>
              <input type="checkbox" /> 夜中に3回以上トイレに起きる
            </li>
            <li>
              <input type="checkbox" /> 起きると口の中やのどが乾燥している
            </li>
          </ul>
          <h3>寝室の環境</h3>
          <ul>
            <li>
              <input type="checkbox" />
              寝る前も寝た後も部屋が明るい
            </li>
            <li>
              <input type="checkbox" />
              寝るときに周りの音や人の声が気になる
            </li>
            <li>
              <input type="checkbox" />
              暑さや寒さで寝苦しいことがある
            </li>
            <li>
              <input type="checkbox" />
              起きた時に首や肩、腰などが痛い
            </li>
            <li>
              <input type="checkbox" />
              パートナー・子供・ペットと同じベッドや寝具で寝ている
            </li>
          </ul>
          <h3>入眠前後の習慣</h3>
          <ul>
            <li>
              <input type="checkbox" />
              夜の自宅リビングやダイニングが、明るい
            </li>
            <li>
              <input type="checkbox" />
              夕方または夜に自宅で寝落ちの習慣がある
            </li>
            <li>
              <input type="checkbox" />
              就寝前にゲーム・SNS・ショート動画を見る
            </li>
            <li>
              <input type="checkbox" />
              就寝前に仕事や悩み事について考え続け、ストレスを感じている
            </li>
            <li>
              <input type="checkbox" />
              寝酒をする
            </li>
            <li>
              <input type="checkbox" />
              夕方以降にカフェインを摂っている
            </li>
            <li>
              <input type="checkbox" />
              寝れないときは布団の中でじっと過ごしている
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default SleepCheckSheetPage;
