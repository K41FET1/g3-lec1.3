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
  const [quizCompleted, setQuizCompleted] = useState(false)
  const questions = activeQuiz && quiz.find((item) => item.title === activeQuiz)?.questions;
  const handleSubmit = () => {
    if (!currentAnswer) return;
    const isCorrect = currentAnswer === questions[questionIndex].answer;
    setAnswerStatus(isCorrect ? 'correct' : 'wrong');
  
    setTimeout(() => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        setQuizCompleted(true); 
      }
      setAnswerStatus(null);
      setCurrentAnswer(null);
    }, 2000);
  };
  
  return (
    <div className='text-3xl flex flex-wrap'>
      {!activeQuiz && (
      <>
       <Text/>
       <div className="flex flex-col relative  ml-auto mt-[300px] mr-[200px] justify-end w-[564px] gap-6 max-[1530px]:mt-[50px] ">
          {quiz.map((item) => (
         <button
         onClick={() => {
           setActiveQuiz(item.title);
           setQuizCompleted(false); 
           setQuestionIndex(0);
         }}
         className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left px-4'
         key={item.title}
       >
              {item.title}
            </button>
          ))}
        </div>
      </>
      )}

      {activeQuiz && (
       <div className='text-3xl flex flex-wrap  absolute'>
       <Text activeQuiz={activeQuiz} questions={questions} questionIndex={questionIndex} quizCompleted={quizCompleted} />
       <div></div>
       <div className='flex flex-col ml-[500px] relative mt-[300px] justify-end w-[564px] gap-6 max-[2000px]:mt-[50px] max-[1150px]:ml-[50px]  '>
     
         
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





