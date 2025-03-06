import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Text from './components/Text';

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [showTest, setShowTest] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const correctAnswer = 'A';
  const [error, setError] = useState(null);

  const getAnswerIcon = (buttonId) => {
    if (!isSubmitted) return null;

    // Check if the answer was not selected and show the X mark on all buttons
    if (!selectedAnswer) {
      return '/assets/xmark.svg';
    }

    // Show checkmark on the correct answer
    if (buttonId === correctAnswer) {
      return '/assets/checkmark.svg';
    }

    // Show X mark on the wrong answer
    if (selectedAnswer === buttonId && buttonId !== correctAnswer) {
      return '/assets/xmark.svg';
    }

    return null;
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setError('Please select an answer.');
    } else {
      setIsSubmitted(true);
      setIsCorrect(selectedAnswer === correctAnswer);
      setError(null);
    }
  };

  const handleClick = (buttonId) => {
    setSelectedAnswer(buttonId);
    setActiveButton(buttonId);
    setIsSubmitted(false);
    setError(null);
  };

  // Handle mouse hover on a button
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  if (showTest) {
    return (
      <div className="absolute right-[140px] bottom-[280px]">
        <Header showTest={showTest} />
        <div className="flex justify-center items-center w-[564px] flex-col gap-6">
          {/* Button A */}
          <button
            id="accessibility-input"
            onClick={() => handleClick('A')}
            onMouseEnter={() => handleMouseEnter('A')}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer group bg-white w-[564px] h-[92px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px] ${
              isSubmitted && selectedAnswer === 'A'
                ? isCorrect
                  ? 'border-[3px] border-green-500'
                  : 'border-[3px] border-red-500'
                : activeButton === 'A'
                ? 'border-[3px] border-purple-500'
                : ''
            }`}
          >
            {isSubmitted && getAnswerIcon('A') && (
              <img
                src={getAnswerIcon('A')}
                alt={isCorrect ? 'Correct' : 'Incorrect'}
                className="w-8 h-8 absolute right-[30px] top-1/2 transform -translate-y-1/2"
              />
            )}
            <img
              id="iconBG"
              src={
                isSubmitted && selectedAnswer === 'A'
                  ? isCorrect
                    ? '/assets/correct-rec.svg'
                    : '/assets/incorrect-rec.svg'
                  : activeButton === 'A'
                  ? '/assets/Clicked-rec.svg'
                  : hoveredButton === 'A'
                  ? '/assets/Hover-rec.svg'
                  : '/assets/Quiz-rec.svg'
              }
              alt="Quiz Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g transition-opacity duration-300"
            />
            <img
              src="/assets/A.svg"
              alt="A svg"
              className="w-[20px] h-[28px] absolute left-[37.5px] top-[34px]"
            />
            4.5 : 1
          </button>

          {/* Button B */}
          <button
            id="accessibility-input"
            onClick={() => handleClick('B')}
            onMouseEnter={() => handleMouseEnter('B')}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer group bg-white w-[564px] h-[92px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px] ${
              activeButton === 'B' ? 'border-[3px] border-purple-500' : ''
            } ${
              isSubmitted && selectedAnswer === 'B' && isCorrect
                ? 'border-green-500'
                : isSubmitted && selectedAnswer === 'B' && !isCorrect
                ? 'border-red-500'
                : ''
            }`}
          >
            {isSubmitted && getAnswerIcon('B') && (
              <img
                src={getAnswerIcon('B')}
                alt={isCorrect ? 'Correct' : 'Incorrect'}
                className="w-8 h-8 absolute right-[30px] top-1/2 transform -translate-y-1/2"
              />
            )}
            <img
              src={
                isSubmitted && selectedAnswer === 'B'
                  ? isCorrect
                    ? '/assets/correct-rec.svg'
                    : '/assets/incorrect-rec.svg'
                  : activeButton === 'B'
                  ? '/assets/Clicked-rec.svg'
                  : hoveredButton === 'B'
                  ? '/assets/Hover-rec.svg'
                  : '/assets/Quiz-rec.svg'
              }
              alt="Quiz Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g"
            />
            <img
              src="/assets/B.svg"
              alt="B svg"
              className="w-[20px] h-[28px] absolute left-[37.5px] top-[34px]"
            />
            3 : 1
          </button>

          {/* Button C */}
          <button
            id="accessibility-input"
            onClick={() => handleClick('C')}
            onMouseEnter={() => handleMouseEnter('C')}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer group bg-white w-[564px] h-[92px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px] ${
              activeButton === 'C' ? 'border-[3px] border-purple-500' : ''
            } ${
              isSubmitted && selectedAnswer === 'C' && isCorrect
                ? 'border-green-500'
                : isSubmitted && selectedAnswer === 'C' && !isCorrect
                ? 'border-red-500'
                : ''
            }`}
          >
            {isSubmitted && getAnswerIcon('C') && (
              <img
                src={getAnswerIcon('C')}
                alt={isCorrect ? 'Correct' : 'Incorrect'}
                className="w-8 h-8 absolute right-[30px] top-1/2 transform -translate-y-1/2"
              />
            )}
            <img
              src={
                isSubmitted && selectedAnswer === 'C'
                  ? isCorrect
                    ? '/assets/correct-rec.svg'
                    : '/assets/incorrect-rec.svg'
                  : activeButton === 'C'
                  ? '/assets/Clicked-rec.svg'
                  : hoveredButton === 'C'
                  ? '/assets/Hover-rec.svg'
                  : '/assets/Quiz-rec.svg'
              }
              alt="Quiz Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g"
            />
            <img
              src="/assets/C.svg"
              alt="C svg"
              className="w-[20px] h-[28px] absolute left-[37.5px] top-[34px]"
            />
            2.5 : 1
          </button>

          {/* Button D */}
          <button
            id="accessibility-input"
            onClick={() => handleClick('D')}
            onMouseEnter={() => handleMouseEnter('D')}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer group bg-white w-[564px] h-[92px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px] ${
              activeButton === 'D' ? 'border-[3px] border-purple-500' : ''
            } ${
              isSubmitted && selectedAnswer === 'D' && isCorrect
                ? 'border-green-500'
                : isSubmitted && selectedAnswer === 'D' && !isCorrect
                ? 'border-red-500'
                : ''
            }`}
          >
            {isSubmitted && getAnswerIcon('D') && (
              <img
                src={getAnswerIcon('D')}
                alt={isCorrect ? 'Correct' : 'Incorrect'}
                className="w-8 h-8 absolute right-[30px] top-1/2 transform -translate-y-1/2"
              />
            )}
            <img
              src={
                isSubmitted && selectedAnswer === 'D'
                  ? isCorrect
                    ? '/assets/correct-rec.svg'
                    : '/assets/incorrect-rec.svg'
                  : activeButton === 'D'
                  ? '/assets/Clicked-rec.svg'
                  : hoveredButton === 'D'
                  ? '/assets/Hover-rec.svg'
                  : '/assets/Quiz-rec.svg'
              }
              alt="Quiz Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g"
            />
            <img
              src="/assets/D.svg"
              alt="D svg"
              className="w-[20px] h-[28px] absolute left-[37.5px] top-[34px]"
            />
            5 : 1
          </button>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#A729F5] w-full h-[92px] hover:opacity-[50%] cursor-pointer rounded-3xl font-medium text-[#FFFFFF] text-[28px]"
          >
            Submit Answer
          </button>
        </div>
        {error && (
          <p className="text-red-500 mt-2 text-normal text-2xl text-center flex items-center justify-center">
            <img src="/assets/xmark.svg" alt="Error" className="w-6 h-6 mr-2" />
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <Header showTest={showTest} />
      <Text />
      <div className="flex absolute right-[140px] bottom-[280px]">
        <div className="flex justify-center items-center w-[564px] flex-col gap-6">
          <button
            id="input"
            className="cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]"
          >
            <img
              src="/assets/HTML-rec.svg"
              alt="HTML Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g"
            />
            <img
              src="/assets/HTML.svg"
              alt="HTML Icon"
              className="w-[40px] h-[40px] absolute left-[28px] top-[28px]"
            />
            HTML
          </button>

          <button
            id="input"
            className="cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]"
          >
            <img
              src="/assets/CSS-rec.svg"
              alt="CSS Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[140px] rounded-1g"
            />
            <img
              src="/assets/css.svg"
              alt="CSS Icon"
              className="w-[40px] h-[40px] absolute left-[28px] top-[148px]"
            />
            CSS
          </button>

          <button
            id="input"
            className="cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]"
          >
            <img
              src="/assets/Js-rec.svg"
              alt="Js Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[260px] rounded-1g"
            />
            <img
              src="/assets/Js.svg"
              alt="Js Icon"
              className="w-[30px] h-[30px] absolute left-[32px] top-[273px]"
            />
            Javascript
          </button>

          <button
            id="input"
            className="cursor-pointer bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]"
            onClick={() => setShowTest(true)}
          >
            <img
              src="/assets/Accessibility-rec.svg"
              alt="Accessibility Icon"
              className="w-[56px] h-[56px] absolute left-[20px] top-[380px] rounded-1g"
            />
            <img
              src="/assets/Accessibility.svg"
              alt="Accessibility Icon"
              className="w-[40px] h-[40px] absolute left-[28px] top-[388px]"
            />
            Accessibility
          </button>
        </div>
      </div>
    </>
  );
}

export default App;