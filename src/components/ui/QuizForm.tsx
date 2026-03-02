"use client";

import { questions } from "@/utils/constants";
import Image from "next/image";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

interface QuizFormProps {
  onComplete: () => void;
}

export default function QuizForm({ onComplete }: QuizFormProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="bg-[#f7f7f7] rounded-xl border border-[#D9D9D9]">
      <div className="bg-white rounded-tr-xl rounded-tl-xl">
        <div className="border-b h-15 flex justify-items-start items-center p-5 border-[#D9D9D9]">
          <h2 className="text-[14px] text-[#202020] font-bold">Quiz</h2>
        </div>

        <div className="p-5 space-y-2.5 ">
          {questions.map((q) => (
            <div
              key={q.id}
              className="space-y-2 border rounded-[14px] p-4 border-[#E8E8E8] bg-[#fcfcfc] "
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-[10px] bg-[#0A60E1] text-[#FDFDFD] flex items-center justify-center text-[16px] font-normal">
                  {q.id}
                </div>

                <div>
                  <h3 className="text-[14px] text-[#202020] font-bold ">
                    {q.question}
                  </h3>

                  <div className="flex items-center space-x-2">
                    <p className="text-[#202020] text-[12] pt-[2px] pb-[2px] pr-[8px] pl-[8px] border rounded-[8px] border-[#0000001A] ">
                      Multiple Choice
                    </p>
                    <Image src={q.icon} width={12} height={12} alt={"icon"} />
                    <p className="text-[#636363] text-[12px] ">4 Points</p>
                  </div>
                </div>
              </div>
              {q.type === "mcq" && q.options && (
                <div className="ml-11 space-y-3">
                  {q.options.map((option: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <span className="text-[18px] p-[9px] rounded-[10px] w-full border border-[#E8E8E8] text-[#636363]">
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
                    className="w-full h-[76px] p-4 border border-[#D9D9D9] rounded-lg text-[14px] focus:outline-none focus:border-[#0063EF]"
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
  );
}
