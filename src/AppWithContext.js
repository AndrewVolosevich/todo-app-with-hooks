import React, {createContext} from 'react';
import Wrapper from "./Wrapper";
import {MyContextProvider} from "./contexts/MyContext/MyContextProvider";


export const MyContext = createContext({})

const AppWithContext = () => {

  return (
    <>
      <MyContextProvider>
        Context
        <Wrapper />
      </MyContextProvider>
    </>

  );
};

export default AppWithContext;