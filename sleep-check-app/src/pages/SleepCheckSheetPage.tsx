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
              <label>
                <input type="checkbox" /> 日中、いつでもどこでもすぐに眠れる
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                休日に長時間眠って、平日よりも2時間以上寝だめをしている
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />{" "}
                睡眠時間や、就寝時刻・起床時間がばらばら
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />{" "}
                寝つきが悪い・夜中や早朝に何度も目が覚める・熟睡感や休養感がない
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> いびきを人に指摘されたことがある
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> 夜中に3回以上トイレに起きる
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> 起きると口の中やのどが乾燥している
              </label>
            </li>
          </ul>
          <h3>寝室の環境</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" />
                寝る前も寝た後も部屋が明るい
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                寝るときに周りの音や人の声が気になる
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                暑さや寒さで寝苦しいことがある
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                起きた時に首や肩、腰などが痛い
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                パートナー・子供・ペットと同じベッドや寝具で寝ている
              </label>
            </li>
          </ul>

          <h3>入眠前後の習慣</h3>
          <ul>
            <li>
              <label>
                <input type="checkbox" />
                夜の自宅リビングやダイニングが、明るい
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                夕方または夜に自宅で寝落ちの習慣がある
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                就寝前にゲーム・SNS・ショート動画を見る
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                就寝前に仕事や悩み事について考え続け、ストレスを感じている
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                寝酒をする
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                夕方以降にカフェインを摂っている
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                寝れないときは布団の中でじっと過ごしている
              </label>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default SleepCheckSheetPage;
