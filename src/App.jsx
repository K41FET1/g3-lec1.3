import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Text from './components/Text'
import data from './data.json'


const App = () => {
  const quiz = data.quizzes;
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct', 'wrong', or null
  const questions = activeQuiz && quiz.find((item) => item.title === activeQuiz)?.questions;

  const handleSubmit = () => {
    if (!currentAnswer) return; // Prevent submitting without selection

    if (currentAnswer === questions[questionIndex].answer) {
      setAnswerStatus('correct');
      // Move to the next question after 5 seconds
      setTimeout(() => {
        if (questionIndex + 1 < questions.length) {
          setQuestionIndex(prevIndex => prevIndex + 1); // Move to the next question
        } else {
          alert('Quiz Completed!');
          setActiveQuiz(null);
          setQuestionIndex(0);
        }
        setAnswerStatus(null); // Reset answer status for the next question
        setCurrentAnswer(null); // Reset selected answer for next question
      }, 5000); // Delay before next question
    } else {
      setAnswerStatus('wrong');
    }
  };

  return (
    <div className='text-3xl'>
      {!activeQuiz && (
        <div className="flex flex-col justify-center items-center w-[564px] gap-6">
          {quiz.map((item) => (
            <button
              onClick={() => setActiveQuiz(item.title)}
              className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left px-4'
              key={item.title}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}

      {activeQuiz && (
        <div className='flex justify-evenly items-center'>
          <div></div>
          <div className='flex flex-col gap-6'>
            {questions[questionIndex].options.map((opt) => {
              const isCorrect = opt === questions[questionIndex].answer;
              const isSelected = opt === currentAnswer;
              const showCheck = (answerStatus === 'correct' && isCorrect) || (answerStatus === 'wrong' && isCorrect);
              const showX = answerStatus === 'wrong' && isSelected;

              return (
                <button
                  key={opt}
                  onClick={() => {
                    setCurrentAnswer(opt); // Set the selected answer
                    setAnswerStatus(null); // Reset the answer status whenever a new option is clicked
                  }}
                  className={`relative border-2 cursor-pointer bg-white w-[564px] h-[92px] rounded-3xl font-medium text-[#313E51] text-3xl text-left px-4 transition-colors flex items-center justify-between
                    ${
                      // For selected option, set purple border
                      isSelected
                        ? 'border-purple-500'
                        : 'border-white'
                    }
                    ${
                      // For correct answer, set green border and background
                      answerStatus === 'correct' && isCorrect
                        ? 'border-green-500 bg-green-100'
                        : ''
                    }
                    ${
                      // For wrong answer, set red border and background
                      answerStatus === 'wrong' && isSelected
                        ? 'border-red-500 bg-red-100'
                        : ''
                    }
                  `}
                >
                  {opt}
                  {showCheck && <img src="/assets/checkmark.svg" alt="Correct" className="w-8 h-8 mr-4" />}
                  {showX && <img src="/assets/xmark.svg" alt="Wrong" className="w-8 h-8 mr-4" />}
                </button>
              );
            })}

            <button
              className='cursor-pointer w-[564px] h-[92px] rounded-3xl bg-purple-500 text-white p-[32px]'
              onClick={handleSubmit}
              disabled={!currentAnswer} // Disable submit if no option is selected
            >
              Submit Answer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;






//  function App() { 


//   return (
//     <>
//       <Header />
//       <Text />
//       <div className='absolute right-[140px] bottom-[280px]'>
//         <div className='flex justify-center items-center w-[564px] flex-col gap-6'>
//           <button
//             id='input'
//             className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'
//           >
//             <img
//               src="/assets/HTML-rec.svg"
//               alt="HTML Icon"
//               className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g"
//             />
//             <img
//               src="/assets/HTML.svg"
//               alt="HTML Icon"
//               className="w-[40px] h-[40px] absolute left-[28px] top-[28px]"
//             />
//             HTML
//           </button>

//           <button
//             id='input'
//             className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'
//           >
//             <img
//               src="/assets/CSS-rec.svg"
//               alt="CSS Icon"
//               className="w-[56px] h-[56px] absolute left-[20px] top-[140px] rounded-1g"
//             />
//             <img
//               src="/assets/css.svg"
//               alt="CSS Icon"
//               className="w-[40px] h-[40px] absolute left-[28px] top-[148px]"
//             />
//             CSS
//           </button>
          
//           <button
//             id='input'
//             className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'
//           >
//             <img
//               src="/assets/Js-rec.svg"
//               alt="Js Icon"
//               className="w-[56px] h-[56px] absolute left-[20px] top-[260px] rounded-1g"
//             />
//             <img
//               src="/assets/Js.svg"
//               alt="Js Icon"
//               className="w-[30px] h-[30px] absolute left-[32px] top-[273px]"
//             />
//             Javascript
//           </button>

//           <button
//             id='input'
//             className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'

//           >
//             <img
//               src="/assets/Accessibility-rec.svg"
//               alt="Accessibility Icon"
//               className="w-[56px] h-[56px] absolute left-[20px] top-[380px] rounded-1g"
//             />
//             <img
//               src="/assets/Accessibility.svg"
//               alt="Accessibility Icon"
//               className="w-[40px] h-[40px] absolute left-[28px] top-[388px]"
//             />
//             Accessibility
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
