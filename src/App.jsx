import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Text from './components/Text'
import data from './data.json'


const App = () => {
  const quiz = data.quizzes;
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); 
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [newHeaderTitle, setNewHeaderTitle] = useState(null);
  const [newHeaderIcon, setNewHeaderIcon] = useState(null);
  
  const activeQuizData = quiz.find((item) => item.title === activeQuiz);

  const questions = activeQuizData?.questions
  const handleSubmit = () => {
    if (!currentAnswer) return;
    const isCorrect = currentAnswer === questions[questionIndex].answer;
    setAnswerStatus(isCorrect ? 'correct' : 'wrong');
     
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1); 
    }
    setTimeout(() => {
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        setQuizCompleted(true); 
      }
      setAnswerStatus(null);
      setCurrentAnswer(null);
    }, 100);
  };
 
  const toggleHeaderTitle = (el) => {
    setNewHeaderTitle(el);
  };

  const toggleHeaderIcon = (el) => {
    setNewHeaderIcon(el);
  };

  useEffect(() => {
    document.querySelector("#headerTitle").textContent = newHeaderTitle;
    document.querySelector("#headerIcon").src = newHeaderIcon;
  }, [newHeaderTitle]); 


  return (
    <div className='text-3xl flex flex-wrap'>

      {!activeQuiz && (
      <>
       <Header activeQuiz={activeQuiz} newHeaderTitle={newHeaderTitle} />
       <Text/>
       <div className="flex flex-col relative  ml-auto mt-[300px] mr-[200px] justify-end w-[564px] gap-6 max-[1530px]:mt-[50px] ">
          {quiz.map((item) => (
          <button
            onClick={() => {
              setActiveQuiz(item.title);
              setQuizCompleted(false); 
              setQuestionIndex(0);
              setCorrectAnswers(0); 
              toggleHeaderTitle(item.title);
              toggleHeaderIcon(item.icon);
            }}
            className='cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left px-4 flex items-center gap-4'
            key={item.title}
            id='inputFirst'
          >
          <img src={item.icon}  className="w-[40px] h-[40px]" />       
          {item.title}
          </button>
          ))} 
        </div>
      </>
      )}

{quizCompleted ? ( 
      <div  className='flex  flex-wrap '>
          <Header activeQuiz={activeQuiz} />            
          <Text quizCompleted={quizCompleted}/>
          
        <div className=' mt-[300px] ml-[500px] max-[2000px]:mt-[50px] max-[1150px]:ml-[30px]  '>
          <div id='scoreDiv' className='flex flex-col items-center w-[600px] bg-white rounded-[30px] p-[20px] '>
         <div className='flex'>
          {activeQuizData?.icon && <img src={activeQuizData.icon} className="w-[50px] h-[50px] mt-[5px] mr-[10px]" />}
          <h1 className='text-[45px]'>{activeQuiz}</h1>
          </div> 
            
          <h1 className='text-[200px] '>{correctAnswers}</h1>
          <h1 className='text-[30px]  text-gray-500 '> out of {questions.length}</h1>
          </div>


          <button
          className='cursor-pointer w-[600px] h-[92px] mt-[20px] rounded-3xl bg-purple-500 text-white p-[32px]'
          onClick={() => {
          setQuizCompleted(false); 
          setQuestionIndex(0);
          setCorrectAnswers(0);
          setCurrentAnswer(null);
          setAnswerStatus(null);
          id='input'
          }}>
          Play Again
          </button> 
        </div>
        </div>
      ) : activeQuiz && (
       <div className='text-3xl flex flex-wrap  absolute'>
        <Header activeQuiz={activeQuiz} />
       <Text activeQuiz={activeQuiz} questions={questions} questionIndex={questionIndex}  />
       <div></div>
       <div className='flex flex-col ml-[500px] relative mt-[300px] justify-end w-[564px] gap-6 max-[2000px]:mt-[50px] max-[1150px]:ml-[50px]  '>
     
         
            {questions[questionIndex].options.map((opt) => {
              const isCorrect = opt === questions[questionIndex].answer;
              const isSelected = opt === currentAnswer;
              const showCheck = (answerStatus === 'correct' && isCorrect) || (answerStatus === 'wrong' && isCorrect);
              const showX = answerStatus === 'wrong' && isSelected;

              return (
                <button
                  id='input'
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





