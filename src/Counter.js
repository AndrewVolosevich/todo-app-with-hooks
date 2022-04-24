import React, {useContext} from 'react';
import {MyContext} from "./AppWithContext";
import {Button} from "antd";
import {useMyContext} from "./contexts/MyContext/MyContextProvider";

const Counter = () => {
  const {count, handleIncrease, handleDecrease} = useMyContext()

  return (
    <div>
      Count {count}
      <br />
      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handleDecrease}>-</Button>
    </div>
  );
};

export default Counter;