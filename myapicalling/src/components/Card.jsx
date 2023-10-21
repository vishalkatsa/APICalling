import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import {MyContext} from './context/Context'
import { useNavigate } from 'react-router-dom';


export default function Card(props) {
  const [data, setData] = useState(null);
  const [URlerror, setURlerror] = useState(null);
  const API = `https://fakestoreapi.com/products/${props.categorie}`;
  
  useEffect(() => {
    axios.get(API)
    .then( (response)=>setData(response.data))
    .catch((error)=>setURlerror(error.message))

  }, [API])
  const {setsingle} = useContext(MyContext);
  const navigate = useNavigate();
  const navi = (value)=>{
    setsingle(value);
    navigate('/Mcard')
    // console.log(value);
  }
  

  return (
    <> 
      {URlerror && <div className='text-center'>{URlerror}</div>}
    <div className='w-[90%] mx-auto'>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {data !== null ? (
          data.map((value) => (
            <div key={value.id} onClick={()=>navi(value)} className="w-full mx-auto rounded overflow-hidden cursor-pointer shadow-lg bg-white">
              <div className='w-40 h-56 mx-auto mt-1'>
                <img className="w-full h-full object-cover" src={value.image} alt="hi" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{value.title.slice(0,40)}</div>
                <p className="text-gray-700 text-base">{value.description.slice(0,100)}</p>
                <p className="text-gray-700 text-base mt-2">Category: {value.category}</p>
              </div>
              <div className="px-6 py-4">
                <span className="text-gray-500">Price: ${value.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>Loading...</p>
        )}
      </div>
    </div>
    </>
  )
}
