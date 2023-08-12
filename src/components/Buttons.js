import React from 'react'

const Buttons = ({onClick, text}) => {
  return (
    <button className='btn btn-blue' onClick={onClick}>{text}</button>
  )
}

export default Buttons