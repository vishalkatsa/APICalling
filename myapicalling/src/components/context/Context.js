import React, { createContext, useState ,useEffect  } from 'react';
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
//   const [value, setValue] = useState('Hello from Context!');
const [single, setsingle] = useState(getStoredSingle());

                          // start , set data on localStorage 
                            useEffect(() => {
                              localStorage.setItem('mySingleData',JSON.stringify(single))
                            }, [single])
                          // end , set data on localStorage 

                          // start , get data from lacalStorage
                            function getStoredSingle() {
                              const storedSingle = localStorage.getItem('mySingleData');
                              console.log(storedSingle);
                              return storedSingle ? JSON.parse(storedSingle) : null ;
                              
                            }
                            console.log(getStoredSingle());
                          // end , get data from lacalStorage
  return (
    <MyContext.Provider value={{ 
        single,setsingle

     }}>

      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };