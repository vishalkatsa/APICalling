
import React, { useContext } from 'react';
import {MyContext} from './context/Context'


export default function MCard() {
    const {single} = useContext(MyContext);
    console.log(single);
  return (
    <>
    <div class="max-w-full mx-auto md:py-20 md:px-40 bg-[#ffffff] rounded-md overflow-hidden shadow-md">
      <div className='md:flex md:justify-between  mx-auto'>
         <div className='w-[70%] mx-auto md:w-[40%]'>
         <img src={single.image} alt="Mens Cotton Jacket" class="w-full h-full object-cover"/>
         </div>
         <div class="w-[70%] mx-auto md:w-[45%] p-6">
             <h2 class="text-2xl font-bold mb-2">{single.title}</h2>
             <p class="text-gray-700 text-sm mb-4"><strong>Category: </strong> {single.category}</p>
             <p class="text-gray-800 text-lg mb-4"><strong>Price: </strong>{single.price}</p>
             <p class="text-gray-700 mb-4">{single.description}</p>
         </div>
      </div>
    </div>
    </>
  )
}
