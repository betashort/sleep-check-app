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
  question2: "時間がかかりましたか？",
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
      choice1: { label: "いつもより寝つきがよかった", score: 0 },
      choice2: { label: "いつもより少し時間がかかった", score: 1 },
      choice3: { label: "いつもよりかなり時間がかかった", score: 2 },
      choice4: {
        label: "いつもより非常に時間がかかった、あるいは全く眠れなかった",
        score: 3,
      },
    },
  },
];
