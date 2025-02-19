import React from 'react'
import DarkLight from './DarkLight'
import '../index.css'

export default function Header() {
  return (
    <div>
      <header>
        <div className='titleDiv'>
          <div className='logoDiv'><img src="../assets/Accessibility.svg" alt="" /></div>
          <p className='title'>Accessibility</p>  
        </div>
        <DarkLight/>
      </header>
    </div>
  )
}
