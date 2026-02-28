import React, { useState } from 'react';
import { Subject, QuizResult } from '../types';
import { BookOpen, GraduationCap, History, Layout, Settings, Trophy, Clock, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardProps {
  onStartQuiz: (mode: 'Thi thử' | 'Luyện tập', subject?: Subject, count?: number, topic?: string, level?: string) => void;
  history: QuizResult[];
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartQuiz, history }) => {
  const physicsTopics = [
    'Năng lượng cơ học',
    'Ánh sáng',
    'Điện',
    'Điện từ',
    'Năng lượng với cuộc sống'
  ];

  const biologyTopics = [
    'DNA - RNA',
    'Nguyên phân - Giảm phân',
    'Quy luật Mendel',
    'Đột biến'
  ];

  const chemistryTopics = [
    'Kim loại và phi kim',
    'Hydrocarbon và nhiên liệu',
    'Ethylic alcohol – Acetic acid',
    'Lipid – Carbohydrate – Protein – Polymer',
    'Khai thác tài nguyên từ vỏ Trái Đất'
  ];

  const [selectedSubject, setSelectedSubject] = useState<Subject>(Subject.PHYSICS);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);

  const lastResult = history.length > 0 ? history[0] : null;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase">LUYỆN ĐỀ THI KHTN VÀO 10</h1>
          <p className="text-slate-500">Hệ thống ôn luyện tuyển sinh vào lớp 10 THPT</p>
        </div>
        <div className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg shadow-indigo-200">
          <Trophy size={18} />
          <span className="font-semibold">Điểm cao nhất: {Math.max(...history.map(h => h.score), 0).toFixed(1)}</span>
        </div>
      </div>

      {/* Quick Stats */}
      {lastResult && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="quiz-card bg-indigo-50 border-indigo-100"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
              <History size={20} /> Kết quả gần nhất
            </h2>
            <span className="text-sm text-indigo-600 font-medium">{new Date(lastResult.date).toLocaleDateString('vi-VN')}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Điểm số</p>
              <p className="text-2xl font-bold text-indigo-600">{lastResult.score.toFixed(1)}</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Đúng</p>
              <p className="text-2xl font-bold text-emerald-600">{Object.values(lastResult.subjectStats).reduce((acc: number, curr) => acc + (curr as { correct: number }).correct, 0)}/{lastResult.totalQuestions}</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Thời gian</p>
              <p className="text-2xl font-bold text-slate-700">{Math.floor(lastResult.timeSpent / 60)}p {lastResult.timeSpent % 60}s</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Chế độ</p>
              <p className="text-lg font-bold text-slate-700 mt-1">{lastResult.mode}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mock Exam */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="quiz-card cursor-pointer border-2 border-indigo-100 hover:border-indigo-300 group"
          onClick={() => onStartQuiz('Thi thử')}
        >
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Thi thử chuẩn cấu trúc</h3>
          <p className="text-slate-500 mb-6">40 câu hỏi (14 Lí, 14 Hóa, 12 Sinh) trong 50 phút. Chấm điểm và xếp loại tự động.</p>
          <div className="flex items-center text-indigo-600 font-semibold gap-1">
            Bắt đầu thi ngay <ChevronRight size={18} />
          </div>
        </motion.div>

        {/* Practice Modes */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-600" /> Luyện tập theo phân môn
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[Subject.PHYSICS, Subject.CHEMISTRY, Subject.BIOLOGY].map((subject) => (
              <button
                key={subject}
                onClick={() => onStartQuiz('Luyện tập', subject, 20)}
                className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:bg-slate-50 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                    <Layout size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{subject}</p>
                    <p className="text-xs text-slate-500">20 câu hỏi ngẫu nhiên</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-400 group-hover:text-indigo-600" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topic Based Practice */}
      <div className="quiz-card bg-slate-50 border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Settings size={22} className="text-indigo-600" /> Luyện tập theo chủ đề
        </h3>

        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-slate-200 rounded-xl w-fit">
          <button
            onClick={() => { setSelectedSubject(Subject.PHYSICS); setSelectedTopic(null); }}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${selectedSubject === Subject.PHYSICS ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Vật Lí
          </button>
          <button
            onClick={() => { setSelectedSubject(Subject.CHEMISTRY); setSelectedTopic(null); }}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${selectedSubject === Subject.CHEMISTRY ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Hóa Học
          </button>
          <button
            onClick={() => { setSelectedSubject(Subject.BIOLOGY); setSelectedTopic(null); }}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${selectedSubject === Subject.BIOLOGY ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Sinh Học
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">1. Chọn chủ đề {selectedSubject}</p>
            <div className="space-y-2">
              {(selectedSubject === Subject.PHYSICS ? physicsTopics : selectedSubject === Subject.CHEMISTRY ? chemistryTopics : biologyTopics).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                    selectedTopic === topic 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold' 
                      : 'border-white bg-white text-slate-600 hover:border-slate-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">2. Số lượng câu hỏi</p>
              <div className="flex gap-2">
                {[5, 10, 15].map((count) => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`flex-1 py-2 rounded-lg border-2 font-bold transition-all ${
                      questionCount === count 
                        ? 'border-indigo-600 bg-indigo-600 text-white' 
                        : 'border-white bg-white text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    {count} câu
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                disabled={!selectedTopic}
                onClick={() => selectedTopic && onStartQuiz('Luyện tập', selectedSubject, questionCount, selectedTopic)}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
              >
                Bắt đầu luyện tập <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Practice Section */}
      <div className="quiz-card bg-amber-50 border-amber-100">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
            <Star size={24} fill="currentColor" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-900">Luyện tập nâng cao</h3>
            <p className="text-sm text-amber-700">Chinh phục các câu hỏi mức độ Vận dụng (điểm 8, 9, 10)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[Subject.PHYSICS, Subject.CHEMISTRY, Subject.BIOLOGY].map((subject) => (
            <motion.button
              key={subject}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onStartQuiz('Luyện tập', subject, 10, undefined, 'Vận dụng')}
              className="p-4 bg-white border-2 border-amber-200 rounded-2xl hover:border-amber-400 hover:shadow-md transition-all text-center group"
            >
              <p className="font-black text-amber-800 text-lg mb-1">{subject}</p>
              <p className="text-xs text-amber-600 font-medium">10 câu Vận dụng</p>
              <div className="mt-3 inline-flex items-center text-amber-700 text-sm font-bold gap-1 group-hover:translate-x-1 transition-transform">
                Thử thách ngay <ChevronRight size={16} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* History Table */}
      {history.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Lịch sử làm bài</h3>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-bottom border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ngày</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Chế độ</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Điểm</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Thời gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {history.slice(0, 5).map((h) => (
                  <tr key={h.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-600">{new Date(h.date).toLocaleDateString('vi-VN')}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{h.mode}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${h.score >= 8 ? 'bg-emerald-100 text-emerald-700' : h.score >= 5 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                        {h.score.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{Math.floor(h.timeSpent / 60)}p {h.timeSpent % 60}s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
