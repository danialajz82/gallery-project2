import React, { useReducer, useState } from "react";
// const init = 0
const init = {
  value1: 0,
  value2: 5,
};
const reducer = (state, action) => {
  // if (action == "increment") return state + 1;
  // if (action == "decrement") return state - 1;
  // if(action == "reset") return init
  switch (action.type) {
    case "increment":
      return { ...state, value1: state.value1 + action.val };
    case "decrement":
      return { ...state, value1: state.value1 - action.val };
    case "increment2":
      return { ...state, value2: state.value2 + action.val };
    case "decrement2":
      return { ...state, value2: state.value2 - action.val };
    case "reset":
      return init;
    default:
      return state;
  }
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
      {/* <h1 className="text-center">{count}</h1> */}
      <h1 className="text-center">{count.value1}</h1>
      <h1 className="text-center">{count.value2}</h1>
      <div className="text-center my-3">
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "increment", val: 1 })}
        >
          افزایش
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrement", val: 2 })}
        >
          کاهش
        </button>
      </div>
      <div className="text-center my-3">
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "increment2", val: 5 })}
        >
          2افزایش
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrement2", val: 5 })}
        >
          2کاهش
        </button>
      </div>
      {/* <button className="btn btn-success" onClick={() => dispatch("increment")}> */}
      {/* count:{count} */}
      {/* افزایش */}
      {/* </button> */}
      {/* <button className="btn btn-danger" onClick={() => dispatch("decrement")}> */}
      {/* count:{count} */}
      {/* کاهش */}
      {/* </button> */}
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
