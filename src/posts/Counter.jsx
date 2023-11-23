import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handelIncreaseCount = (num) => {
for (let index = 0; index < num; index++) {

    setCount((pervCount)=>{
        return pervCount + 1
    })
    
}

  };
  return (
    <div className="text-center my-3">
      
      <button className="btn btn-success" onClick={()=>handelIncreaseCount(10)}> count:{count}</button>
    </div>
  );
};

export default Counter;
