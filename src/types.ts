export enum Subject {
  PHYSICS = 'Vật lí',
  CHEMISTRY = 'Hóa học',
  BIOLOGY = 'Sinh học'
}

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  content: string;
  options: string[];
  correctAnswer: number; // Index of options
  explanation: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
}

export interface QuizResult {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  timeSpent: number; // in seconds
  subjectStats: {
    [key in Subject]: {
      correct: number;
      total: number;
    }
  };
  mode: 'Thi thử' | 'Luyện tập';
}

export interface QuizState {
  questions: Question[];
  userAnswers: (number | null)[];
  startTime: number;
  isFinished: boolean;
  timeRemaining: number;
}
