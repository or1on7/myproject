'use client'
import { useState, useEffect } from 'react'
import { useThemeContext } from '../context/theme'
import Header from './../components/Header'

const Contact = () => {
  const { background, setBackground } = useThemeContext()

  const changeBackgroundColor = () => {
    if(background === 'lightblue')
    {
      setBackground('lightgreen')
    }
    else{
      setBackground('lightblue')
    }
  }

  return (
    <>
      <Header />
      <div style={{
          'background': background,
          'width': '500px',
          'height': '500px'
      }}>
      </div>
      <button onClick={() => changeBackgroundColor()}>Switch</button>
    </>
  )
}

export default Contact