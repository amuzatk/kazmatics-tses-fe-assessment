"use client";

import Image from "next/image";
import { useState } from "react";

interface QuizFormProps {
  onComplete: () => void;
}

interface Question {
  id: number;
  question: string;
  type: "mcq" | "text";
  options?: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the purpose of React Hooks?",
    type: "mcq",
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 2,
    question: "Which hook is used for side effects in React?",
    type: "mcq",
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 3,
    question: "Which hook is used for side effects in React?",
    type: "mcq",
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 4,
    question: "What is the purpose of React Hooks?",
    type: "mcq",
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 5,
    question: "Which hook is used for side effects in React?",
    type: "mcq",
    options: [
      "A. To use state and other React features in functional components",
      "B. To create class components",
      "C. To style React components",
      "D. To handle routing in React applications",
    ],
  },
  {
    id: 6,
    question: "Explain the Virtual DOM and its benefits",
    type: "text",
  },
];

export default function QuizForm({ onComplete }: QuizFormProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8">
      <div className="bg-[#f7f7f7] rounded-xl border border-[#D9D9D9]">
        <div className="bg-white rounded-tr-xl rounded-tl-xl">
          <div className="border-b h-15 flex justify-items-start items-center p-5 border-[#D9D9D9]">
            <h2 className="text-[14px] text-[#202020] font-bold">Quiz</h2>
          </div>

          <div className="p-5 space-y-10">
            {questions.map((q) => (
              <div key={q.id} className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-[10px] bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {q.id}
                  </div>
                  <h3 className="text-[16px] font-medium text-[#202020]">
                    {q.question}
                  </h3>
                </div>

                {q.type === "mcq" && q.options && (
                  <div className="ml-11 space-y-3">
                    {q.options.map((option, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={option}
                          checked={answers[q.id] === option}
                          onChange={() => handleAnswerChange(q.id, option)}
                          className="w-5 h-5 accent-[#0063EF]"
                        />
                        <span className="text-[14px] text-[#202020]">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {q.type === "text" && (
                  <div className="ml-11">
                    <textarea
                      placeholder="Enter answer here"
                      value={answers[q.id] || ""}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      className="w-full h-32 p-4 border border-[#D9D9D9] rounded-lg text-[14px] focus:outline-none focus:border-[#0063EF]"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-10 mr-5 mb-10">
          <button
            onClick={onComplete}
            className="w-57 h-12 rounded-lg px-6 py-3 border border-[#0063EF] text-[#0063EF] text-[16px] font-normal hover:bg-[#EAF3FF] transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
