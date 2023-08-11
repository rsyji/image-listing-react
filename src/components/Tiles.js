import React from 'react'

const Tiles = ({id,url,albumId,title}) => {
  return (
    <>
        <div className='grid grid-cols-2 w-96 h-24 border border-sky-500' key={id}>
            <div className='flex justify-center w-16 h-24'>
              <img src={url} alt={albumId}/>
            </div>
            <div className='grid'>
              <h1 className='font-bold text-black'>{(title).slice(0,10).toUpperCase()}</h1>
              <p>{(title).slice(0,30)}</p>
            </div>
        </div>
    </>
  )
}

export default Tiles