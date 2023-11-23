import React, { useReducer, useState } from "react";
const init ={
  value1 : 0,
  value2 : 5,
}
const reducer = (state, action) => {
  if (action == "increment") return state + 1;
  if (action == "decrement") return state - 1;
  if(action == "reset") return init
};

const Counter = () => {
  //    const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, init);

  //   const handelSetCount = () => {

  //     // setCount((PervCount)=>{
  //     //   return  PervCount + 1
  //     // })
  //   };

  return (
    <div className="text-center my-3">
      <h1 className="text-center">{count}</h1>
      <button className="btn btn-success" onClick={() => dispatch("increment")}>
        {/* count:{count} */}
        افزایش
      </button>
      <button className="btn btn-danger" onClick={() => dispatch("decrement")}>
        {/* count:{count} */}
        کاهش
      </button>
      <button className="btn btn-warning" onClick={() => dispatch("reset")}>
       reset
      </button>
    </div>
  );
};

export default Counter;
