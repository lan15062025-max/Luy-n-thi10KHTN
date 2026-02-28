import React, { useState } from 'react';
import { Question, QuizResult, Subject } from '../types';
import { Trophy, Clock, CheckCircle2, XCircle, ChevronLeft, RotateCcw, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';

interface ResultProps {
  result: QuizResult;
  questions: Question[];
  userAnswers: (number | null)[];
  onBack: () => void;
  onRetry: () => void;
}

export const Result: React.FC<ResultProps> = ({ result, questions, userAnswers, onBack, onRetry }) => {
  const [showReview, setShowReview] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-emerald-600';
    if (score >= 5) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getRank = (score: number) => {
    if (score >= 9) return 'Xuất sắc';
    if (score >= 8) return 'Giỏi';
    if (score >= 6.5) return 'Khá';
    if (score >= 5) return 'Trung bình';
    return 'Yếu';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Summary Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="quiz-card text-center py-12"
      >
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
          <Trophy size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Hoàn thành bài {result.mode}!</h2>
        <p className="text-slate-500 mb-8">Bạn đã nỗ lực rất tuyệt vời. Hãy xem lại kết quả chi tiết bên dưới.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="space-y-1">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Điểm số</p>
            <p className={`text-4xl font-black ${getScoreColor(result.score)}`}>{result.score.toFixed(1)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Xếp loại</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{getRank(result.score)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Đúng</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">
              {Object.values(result.subjectStats).reduce((acc: number, curr) => acc + (curr as { correct: number }).correct, 0)}/{result.totalQuestions}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Thời gian</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{Math.floor(result.timeSpent / 60)}p {result.timeSpent % 60}s</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={onRetry}
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            <RotateCcw size={20} /> Làm lại đề này
          </button>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-8 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-colors"
          >
            <ChevronLeft size={20} /> Về trang chủ
          </button>
        </div>
      </motion.div>

      {/* Subject Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[Subject.PHYSICS, Subject.CHEMISTRY, Subject.BIOLOGY].map((subject) => {
          const stats = result.subjectStats[subject];
          const percent = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
          return (
            <div key={subject} className="quiz-card">
              <h3 className="font-bold text-slate-900 mb-4">{subject}</h3>
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl font-bold text-slate-800">{stats.correct}/{stats.total}</span>
                <span className="text-sm font-bold text-indigo-600">{percent.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  className={`h-full ${percent >= 80 ? 'bg-emerald-500' : percent >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Review Toggle */}
      <div className="space-y-6">
        <button 
          onClick={() => setShowReview(!showReview)}
          className="w-full flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-bold text-slate-900"
        >
          Xem chi tiết đáp án & lời giải
          {showReview ? <ChevronUp /> : <ChevronDown />}
        </button>

        {showReview && (
          <div className="space-y-6">
            {questions.map((q, idx) => {
              const userAnswer = userAnswers[idx];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={q.id} className={`quiz-card border-l-4 ${isCorrect ? 'border-l-emerald-500' : 'border-l-rose-500'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Câu {idx + 1} • {q.subject}</span>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <CheckCircle2 size={14} /> Chính xác
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-rose-600 text-xs font-bold">
                        <XCircle size={14} /> Sai rồi
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg font-bold text-slate-900 mb-6">{q.content}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {q.options.map((opt, optIdx) => {
                      let style = 'border-slate-100 text-slate-600';
                      if (optIdx === q.correctAnswer) style = 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold';
                      else if (optIdx === userAnswer && !isCorrect) style = 'border-rose-500 bg-rose-50 text-rose-700 font-bold';
                      
                      return (
                        <div key={optIdx} className={`p-4 rounded-xl border-2 flex items-center gap-3 ${style}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                            optIdx === q.correctAnswer ? 'bg-emerald-500 border-emerald-500 text-white' : 
                            optIdx === userAnswer ? 'bg-rose-500 border-rose-500 text-white' : 'border-slate-200 text-slate-400'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          {opt}
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 flex gap-3">
                    <Info className="text-indigo-500 shrink-0" size={20} />
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Lời giải chi tiết</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
