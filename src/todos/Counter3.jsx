import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
    const [count1 ,  increment1 , dicrement1 , reset1 ]= useCounter(0 , 1)
    const [count2 ,  increment2 , dicrement2 , reset2 ]= useCounter(5 , 10)
  return (
    <div>
      <div className="text-center my-3">
        <h3 className="text-center text-info">count : {count1}</h3>
        <button onClick={increment1} className="btn btn-success">افزایش</button>
        <button onClick={dicrement1} className="btn btn-danger">کاهش</button>
        <button onClick={reset1} className="btn btn-secondary">ریست</button>
      </div>

      <div className="text-center my-3">
        <h3 className="text-center text-info">count : {count2}</h3>
        <button onClick={increment2} className="btn btn-success">افزایش</button>
        <button onClick={dicrement2} className="btn btn-danger">کاهش</button>
        <button onClick={reset2} className="btn btn-secondary">ریست</button>
      </div>
    </div>
  );
};

export default Counter