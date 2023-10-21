import React, { useState, useEffect } from 'react';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import {MyContext} from './context/Context'

export default function Card(props) {

  const [calledData, setCalledData] = useState(null);
  const {setsingle} = useContext(MyContext);
  const navigate = useNavigate()


  const ns=(value)=>{
    setsingle(value)
    navigate('/Mcard')
    console.log(value); 
  }

  let Apiurl = `https://fakestoreapi.com/products/${props.categorie}`
    console.log(props.categorie);
    
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const responseApi = await fetch(Apiurl);
            const data = await responseApi.json()
            setCalledData(data)
            
          } catch (error) {
            
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      
    }, [props.categorie ])
    

  return (
    <>
    <div className='w-[90%] mx-auto'>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {calledData !== null ? (
          calledData.map((value) => (
            <div key={value.id} onClick={(e)=>ns(value)} className="w-full mx-auto rounded overflow-hidden cursor-pointer shadow-lg bg-white">
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
          <p>Loading...</p>
        )}
      </div>
    </div>
    </>
  )
}
