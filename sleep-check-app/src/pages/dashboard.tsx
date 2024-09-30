import React from "react";
import sleepImage from "../assets/images/sleep.png";
function Dashboard() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={sleepImage}></img>
      </div>
      <div>
        <h2 className="text-center">睡眠のためのアプリです</h2>
        <p className="text-center">
            ＊作成者が個人的に調べた内容のため、エビデンスはありません。
          </p>
          <h3 className="p-4 text-center">機能</h3>
        <div className="discription flex justify-center items-center">
          <ul className="list-disc">
            <li>睡眠時間の記録(日記形式)</li>
            <li>アテネ不眠尺度セルフチェック</li>
            <li>睡眠度チェックシート</li>
            <li>睡眠のためのTips</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
