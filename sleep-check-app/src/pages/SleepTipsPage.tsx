import React from 'react'

function SleepTipsPage() {
  return (
    <>
    <div className='p-4'>
    {/* アコーディオン */}
    <h2 className=''>朝、目を覚ます方法？</h2>
    <ul>
        <li>朝ごはんを食べる</li>
        <li>コーヒーを飲む</li>
        <li>朝日を浴びる</li>
    </ul>

    <h2>一般的な睡眠時間は？</h2>
    <ul>
    <li>7~8時間</li>
    </ul>

    <h2>自分の睡眠を知るためには？</h2>
    <ul>
        <li>睡眠日記をつける</li>
        <li>アプリを活用する</li>
    </ul>

    <h2>寝る準備をしよう！</h2>
    <ul>
        <li>寝室を暗くしよう</li>
        <li>周囲の音が気になるときは耳栓をしよう</li>
        <li>寝室の温度を調整しよう (夏：23~26℃ 冬：19~22℃)</li>
        <li>夜はリビングを明るすぎないようにしよう</li>
        <li>午後6時以降のカフェインは摂らないようにしよう</li>
        <li>寝酒はやめよう</li>
        <li>寝室以外で寝落ちしないようにしよう</li>
        <li>眠れないときは、1回布団から出よう</li>
        <li>寝る前は仕事・悩み事は考えないようにしよう</li>
        <li>寝る前はSNSを見ないようにしよう</li>
    </ul>
    </div>
    </>
  )
}

export default SleepTipsPage