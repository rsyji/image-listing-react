import React,{useState} from 'react'
import ImagesData from './imagesData'
import Tiles from './components/Tiles'
// import CardsTiles from './components/CardsTiles'

const Page = () => {
  const [items, setItems]=useState(ImagesData)
  const handleClick = (galleryId)=>{
    const filteredItems= ImagesData.filter(item=>{
      return item.albumId===galleryId
    })
    setItems(filteredItems)
  }
  return (
    <>
      <h1 className='text-3xl font-bold mt-8 mb-2'>Images Gallery</h1>
      <hr/>
      <nav>
        <ul className='grid grid-cols-5 md:grid-cols-5 sm:grid-cols-3'>
          <li className='mx-4'><button className='btn btn-blue' onClick={()=>handleClick(1)}>Gallery 1</button></li>
          <li className='mx-4'><button className='btn btn-blue' onClick={()=>handleClick(2)}>Gallery 2</button></li>
          <li className='mx-4'><button className='btn btn-blue' onClick={()=>handleClick(3)}>Gallery 3</button></li>
          <li className='mx-4'><button className='btn btn-blue' onClick={()=>handleClick(4)}>Gallery 4</button></li>
          <li className='mx-4'><button className='btn btn-blue' onClick={()=>setItems(ImagesData)}>All</button></li>
        </ul>
      </nav>
      <div className='grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-4'>
        {
          items.map(item=> <Tiles id={item.id} url={item.url} albumId={item.albumId} title={item.title}/>)
        }
       {/* {

        items.map(ele=>{
          const {albumId,id,title,url}=ele
          return(
            <div className='grid grid-cols-2 w-96 h-24 border border-sky-500' key={id}>
            <div className='flex justify-center w-16 h-24'>
             <img src={url} alt={albumId}/>
            </div>
            <div className='grid'>
              <h1 className='font-bold text-black'>{title.slice(0,10).toUpperCase()}</h1>
              <p>{title.slice(0,30)}
              </p>
            </div>
          </div>
          )
        })
       } */}


      </div>

    </>
  )
}

export default Page