export interface IQuestion {
  [key: string]: string;
}

export interface IAnswerLabel {
  label: string;
  score: number;
}

export interface IAnswerChoice {
  [key: string]: {
    [key: string]: IAnswerLabel;
  };
}

export const QUESTIONS: IQuestion = {
  question1: "ベッドについてから実際に寝るまで、時間がかかりましたか？",
  question2: "夜間、睡眠の途中で目が覚めましたか？",
  question3:"希望する起床時間より早く目覚めて、それ以降、眠れないことはありましたか？",
  question4: "夜の眠りや昼寝も合わせて、睡眠時間はたりていましたか？",
  question5: "全体的な睡眠の質について、どう感じていますか？",
  question6: "日中の気分はいかがでしたか？",
  question7: "日中の身体的及び精神的な活動の状態は、いかがでしたか？",
  question8: "日中の眠気はありましたか？",
};

export const CHOICELIST: string[] = [
  "choice1",
  "choice2",
  "choice3",
  "choice4",
];

export const ANSWERCHOICES: IAnswerChoice[] = [
  {
    question1: {
      choice1: { label: "いつもより寝つきがよかった", score: 0 },
      choice2: { label: "いつもより少し時間がかかった", score: 1 },
      choice3: { label: "いつもよりかなり時間がかかった", score: 2 },
      choice4: {
        label: "いつもより非常に時間がかかった、あるいは全く眠れなかった",
        score: 3,
      },
    },
  },
  {
    question2: {
      choice1: { label: "問題になるほどのことはなかった", score: 0 },
      choice2: { label: "少し困ることがある", score: 1 },
      choice3: { label: "かなり困っている", score: 2 },
      choice4: {
        label: "深刻な状態、あるいは全く眠れなかった",
        score: 3,
      },
    },
  },
  {
    question3: {
      choice1: { label: "そのようなことはなかった", score: 0 },
      choice2: { label: "少し早かった", score: 1 },
      choice3: { label: "かなり早かった", score: 2 },
      choice4: {
        label: "非常に早かった、あるいは全く眠れなかった",
        score: 3,
      },
    },
  },
  {
    question4: {
      choice1: { label: "十分である", score: 0 },
      choice2: { label: "少し足りない", score: 1 },
      choice3: { label: "かなり足りない", score: 2 },
      choice4: {
        label: "全く足りない、あるいは全く眠れなかった",
        score: 3,
      },
    },
  },
  {
    question5: {
      choice1: { label: "満足している", score: 0 },
      choice2: { label: "少し不満である", score: 1 },
      choice3: { label: "かなり不満である", score: 2 },
      choice4: {
        label: "非常に不満である、あるいは全く眠れなかった",
        score: 3,
      },
    },
  },
  {
    question6: {
      choice1: { label: "いつも通り悪くなかった", score: 0 },
      choice2: { label: "少し滅入った", score: 1 },
      choice3: { label: "かなり滅入った", score: 2 },
      choice4: { label: "非常に滅入った", score: 3 },
    },
  },
  {
    question7: {
      choice1: { label: "いつも通り", score: 0 },
      choice2: { label: "少し低下した", score: 1 },
      choice3: { label: "かなり低下した", score: 2 },
      choice4: { label: "非常に低下した", score: 3 },
    },
  },
  {
    question8: {
      choice1: { label: "全くなかった", score: 0 },
      choice2: { label: "少しあった", score: 1 },
      choice3: { label: "かなりあった", score: 2 },
      choice4: { label: "激しかった", score: 3 },
    },
  },
];
