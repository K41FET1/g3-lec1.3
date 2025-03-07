import React from 'react';

export default function Text({ showTest, questionNumber }) {
  const totalQuestions = 10;
  const safeQuestionNumber = Math.min(questionNumber, totalQuestions);
  const progress = (safeQuestionNumber / totalQuestions) * 100;

  return (
    <div className="mt-[300px]">
      {showTest ? (
        safeQuestionNumber === totalQuestions ? (
          <div className="mx-36   ">
             <p className='font-bold text-gray-500  text-[80px]'>Quiz completed</p>
             <p className='font-bold text-[80px]'>You scored...</p>
          </div>
        ) : (
          <div className="mx-36">
            <p className="text-xl font-bold mb-4 text-gray-500 text-[30px] font-rubik">
              Question {safeQuestionNumber} of {totalQuestions}
            </p>
            <p className="font-bold mb-4 text-black-500 text-[45px] w-[550px]">
              Which of these color contrast ratios defines the minimum WCAG 2.1
              Level AA requirement for normal text?
            </p>
            <div
              className="w-200 bg-gray-200 h-2 rounded-full mb-4"
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
        )
      ) : (
        <div className="mx-36">
          <p id="welcoming" className="font-rubik text-[45px] md:text-[60px] font-light">
            Welcome to the
          </p>
          <p id="welcoming" className="font-rubik text-[45px] md:text-[60px] font-bold color-[#313E51]">
            Frontend Quiz!
          </p>
          <p id="welcoming" className="text-gray-500 italic my-10 font-rubik text-[20px]">
            Pick a subject to get started.
          </p>
        </div>
      )}
    </div>
  );
}
