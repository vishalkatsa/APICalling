import React, { createContext, useState } from 'react';
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
//   const [value, setValue] = useState('Hello from Context!');
const [single, setsingle] = useState()


  return (
    <MyContext.Provider value={{ 
        single,setsingle

     }}>

      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };