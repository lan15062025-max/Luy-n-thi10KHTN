import React, { useState, useEffect } from 'react';
import { Question, Subject } from '../types';
import { Clock, ChevronLeft, ChevronRight, Send, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizProps {
  questions: Question[];
  duration: number; // in minutes
  onFinish: (answers: (number | null)[], timeSpent: number) => void;
  onCancel: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, duration, onFinish, onCancel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    onFinish(answers, duration * 60 - timeLeft);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentIndex];
  const answeredCount = answers.filter(a => a !== null).length;

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left: Question Content */}
      <div className="lg:col-span-3 space-y-6">
        <div className="quiz-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                currentQuestion.subject === Subject.PHYSICS ? 'bg-blue-100 text-blue-700' :
                currentQuestion.subject === Subject.CHEMISTRY ? 'bg-orange-100 text-orange-700' :
                'bg-emerald-100 text-emerald-700'
              }`}>
                {currentQuestion.subject}
              </span>
              <span className="text-xs text-slate-400 font-medium">• {currentQuestion.topic}</span>
              <span className="text-xs text-slate-400 font-medium">• {currentQuestion.level}</span>
            </div>
            <div className={`flex items-center gap-2 font-mono font-bold ${timeLeft < 300 ? 'text-rose-600 animate-pulse' : 'text-slate-600'}`}>
              <Clock size={18} />
              {formatTime(timeLeft)}
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-8 leading-relaxed">
            <span className="text-indigo-600 mr-2">Câu {currentIndex + 1}:</span>
            {currentQuestion.content}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`option-btn ${answers[currentIndex] === idx ? 'selected' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold transition-colors ${
                  answers[currentIndex] === idx ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-200 text-slate-400'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-slate-700 font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50 transition-colors"
          >
            <ChevronLeft size={20} /> Câu trước
          </button>
          
          <div className="text-sm font-bold text-slate-400">
            {currentIndex + 1} / {questions.length}
          </div>

          <button
            onClick={() => {
              if (currentIndex === questions.length - 1) {
                setShowConfirmSubmit(true);
              } else {
                setCurrentIndex(prev => prev + 1);
              }
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            {currentIndex === questions.length - 1 ? 'Nộp bài' : 'Câu tiếp'} <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Right: Navigation Grid */}
      <div className="space-y-6">
        <div className="quiz-card">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
            Danh sách câu hỏi
            <span className="text-xs font-normal text-slate-500">{answeredCount}/{questions.length} đã làm</span>
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  currentIndex === idx ? 'ring-2 ring-indigo-600 ring-offset-2' : ''
                } ${
                  answers[idx] !== null ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100">
            <button 
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100"
            >
              <Send size={18} /> Nộp bài thi
            </button>
            <button 
              onClick={onCancel}
              className="w-full mt-2 py-3 text-slate-400 font-bold hover:text-rose-600 transition-colors"
            >
              Thoát luyện tập
            </button>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3">
          <AlertCircle className="text-amber-600 shrink-0" size={20} />
          <p className="text-xs text-amber-800 leading-relaxed">
            Bạn có thể quay lại các câu hỏi đã làm để sửa đáp án trước khi nhấn nộp bài.
          </p>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      <AnimatePresence>
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-2">Xác nhận nộp bài?</h3>
              <p className="text-center text-slate-500 mb-8">
                Bạn đã hoàn thành {answeredCount}/{questions.length} câu hỏi. Bạn có chắc chắn muốn kết thúc bài thi không?
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowConfirmSubmit(false)}
                  className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Làm tiếp
                </button>
                <button 
                  onClick={handleSubmit}
                  className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  Nộp bài
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
