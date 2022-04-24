import {createContext, useContext, useMemo, useState} from "react";

const MyContext = createContext({
  count: 0
})

export const MyContextProvider = ({children}) => {

  const [count, setCount] = useState(1)
  const handleIncrease = () => {
    setCount(old => old + 1)
  }
  const handleDecrease = () => {
    setCount(old => old - 1)
  }


  const contextValue = useMemo(() => {
    return {
      count,
      handleIncrease,
      handleDecrease
    }
  }, [count])

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext)
}
