import React from "react";
import sleepImage from "../assets/images/sleep.png";
import referencesImage1 from "../assets/images/参考_睡眠の超基本.jpg";
import referencesImage2 from "../assets/images/参考_最高の睡眠.jpg";

function Dashboard() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img src={sleepImage} alt="sleepImageIcon" />
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
      <div className="">
        <h2 className="text-center">参考文献</h2>
        <div className="grid grid-cols-3">
          <div className="m-4">
            <a href="https://amzn.to/3Br8eNf">
              <img src={referencesImage1} alt="睡眠の超基本" width="200" />
            </a>
          </div>
          <div className="m-4">
            <a href="https://amzn.to/4duJgJO">
              <img src={referencesImage2} alt="最高の睡眠" width="200" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
