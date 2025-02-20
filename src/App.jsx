import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Text from './components/Text'




function App() {
  return (
    <>
      <Header />
      <Text />
      <div className='absolute right-[140px] bottom-[280px]'>
        <div className='flex justify-center items-center w-[564px] flex-col gap-6'>
          <button id='input' className='bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'>
            <img src="/Assets/HTML-rec.svg" alt="HTML Icon" className="w-[56px] h-[56px] absolute left-[20px] top-[20px] rounded-1g" />
            <img src="/Assets/HTML.svg" alt="HTML Icon" className="w-[40px] h-[40px] absolute left-[28px] top-[28px]" />
            HTML
          </button>

          <button id='input' className='bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'>
            <img src="/Assets/CSS-rec.svg" alt="CSS Icon" className="w-[56px] h-[56px] absolute left-[20px] top-[140px] rounded-1g" />
            <img src="/Assets/css.svg" alt="CSS Icon" className="w-[40px] h-[40px] absolute left-[28px] top-[148px]" />
            CSS
          </button>

          <button id='input' className='bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'>
            <img src="/Assets/Js-rec.svg" alt="Js Icon" className="w-[56px] h-[56px] absolute left-[20px] top-[260px] rounded-1g" />
            <img src="/Assets/Js.svg" alt="Js Icon" className="w-[30px] h-[30px] absolute left-[32px] top-[273px]" />
            Javascript
          </button>

          <button id='input' className='bg-white w-[564px] h-[96px] rounded-3xl font-medium text-[#313E51] text-3xl text-left pl-[108px]'>
            <img src="/Assets/Accessibility-rec.svg" alt="Accessibility Icon" className="w-[56px] h-[56px] absolute left-[20px] top-[380px] rounded-1g" />
            <img src="/Assets/Accessibility.svg" alt="Accessibility Icon" className="w-[40px] h-[40px] absolute left-[28px] top-[388px]" />
            Accessibility
          </button>
        </div>
      </div>
<<<<<<< HEAD
            </>
=======
            
    </>
    
>>>>>>> 9c032cb97949998b4b8c6353398cc15fd3f0a012
    )
}

export default App
