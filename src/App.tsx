/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Subject, Question, QuizResult } from './types';
import { getExamQuestions, getRandomQuestions } from './data/questions';
import { Dashboard } from './components/Dashboard';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { motion, AnimatePresence } from 'motion/react';

type View = 'dashboard' | 'quiz' | 'result';

export default function App() {
  const [view, setView] = useState<View>('dashboard');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [quizMode, setQuizMode] = useState<'Thi thử' | 'Luyện tập'>('Thi thử');

  // Load history from LocalStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('khtn9_quiz_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse history', e);
      }
    }
  }, []);

  // Save history to LocalStorage
  const saveResult = (result: QuizResult) => {
    const newHistory = [result, ...history];
    setHistory(newHistory);
    localStorage.setItem('khtn9_quiz_history', JSON.stringify(newHistory));
  };

  const handleStartQuiz = (mode: 'Thi thử' | 'Luyện tập', subject?: Subject, count: number = 40, topic?: string) => {
    let quizQuestions: Question[] = [];
    if (mode === 'Thi thử') {
      quizQuestions = getExamQuestions();
    } else {
      quizQuestions = getRandomQuestions(count, subject, topic);
    }
    
    setQuestions(quizQuestions);
    setUserAnswers(new Array(quizQuestions.length).fill(null));
    setQuizMode(mode);
    setView('quiz');
  };

  const handleFinishQuiz = (answers: (number | null)[], timeSpent: number) => {
    setUserAnswers(answers);
    
    // Calculate stats
    const stats = {
      [Subject.PHYSICS]: { correct: 0, total: 0 },
      [Subject.CHEMISTRY]: { correct: 0, total: 0 },
      [Subject.BIOLOGY]: { correct: 0, total: 0 },
    };

    questions.forEach((q, idx) => {
      stats[q.subject].total += 1;
      if (answers[idx] === q.correctAnswer) {
        stats[q.subject].correct += 1;
      }
    });

    const totalCorrect = Object.values(stats).reduce((acc, curr) => acc + curr.correct, 0);
    const score = (totalCorrect / questions.length) * 10;

    const result: QuizResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score,
      totalQuestions: questions.length,
      timeSpent,
      subjectStats: stats,
      mode: quizMode
    };

    setCurrentResult(result);
    saveResult(result);
    setView('result');
  };

  const handleRetry = () => {
    setUserAnswers(new Array(questions.length).fill(null));
    setView('quiz');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('dashboard')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <span className="font-black text-xl">9</span>
            </div>
            <span className="font-bold text-slate-900 hidden sm:block">KHTN 9 - Ôn Thi Vào 10</span>
          </div>
          
          <div className="flex items-center gap-4">
            {view === 'quiz' && (
              <div className="px-3 py-1 bg-rose-50 text-rose-600 rounded-lg text-xs font-bold border border-rose-100">
                Đang làm bài...
              </div>
            )}
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent('User')}`} alt="Avatar" />
            </div>
          </div>
        </div>
      </nav>

      <main className="px-4">
        <AnimatePresence mode="wait">
          {view === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Dashboard onStartQuiz={handleStartQuiz} history={history} />
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Quiz 
                questions={questions} 
                duration={quizMode === 'Thi thử' ? 50 : 20} 
                onFinish={handleFinishQuiz}
                onCancel={() => setView('dashboard')}
              />
            </motion.div>
          )}

          {view === 'result' && currentResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <Result 
                result={currentResult} 
                questions={questions} 
                userAnswers={userAnswers}
                onBack={() => setView('dashboard')}
                onRetry={handleRetry}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm">© 2024 Hệ thống ôn luyện KHTN 9. Chúc các bạn ôn thi tốt!</p>
      </footer>
    </div>
  );
}
