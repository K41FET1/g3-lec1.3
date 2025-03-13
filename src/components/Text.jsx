import React from 'react';

export default function Text({ activeQuiz, questions, questionIndex, quizCompleted }) {
  const totalQuestions = 10;
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="mt-[300px]">
      {quizCompleted ? ( 
        <div className="mx-36 max-[1000px]:ml-[60px]">
          <p className="font-bold text-gray-500 text-[80px] max-[1000px]:text-[55px]">Quiz Completed</p>
          <p className="font-bold text-[80px] max-[1000px]:text-[55px] ">You scored...</p>
        </div>
      ) : activeQuiz ? (
        <div className="mx-36 max-[1000px]:ml-[60px]">
          <p className="text-xl font-bold mb-4 text-gray-500 text-[30px] font-rubik">
            Question {questionIndex + 1} of {totalQuestions}
          </p>
          <p className="font-bold mb-4 text-black-500 text-[45px] w-[550px] max-[1000px]:text-[32px]">
            {questions && questions[questionIndex]?.question}
          </p>
          <div
            className="w-200 bg-gray-200 h-2 rounded-full mb-4 max-[1000px]:w-130 "
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Quiz Progress"
          >
            <div
              className="bg-purple-500 h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="mx-36">
          <p className="font-rubik text-[45px] md:text-[70px] font-light">
            Welcome to the
          </p>
          <p className="font-rubik text-[45px] md:text-[70px] font-bold color-[#313E51]">
            Frontend Quiz!
          </p>
          <p className="text-gray-500 italic my-10 font-rubik text-[30px]">
            Pick a subject to get started.
          </p>
        </div>
      )}
    </div>
  );
}
