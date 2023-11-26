import React from "react";
import style from "../style.module.css";
import Counter from "./Counter3";
import Parent from "./Parent";
import useTitle from "../hooks/useTitle";

const Todos = () => {
  useTitle("کارها")
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کارها </h4>
      {/* <Parent /> */}
      
    <Counter/>
    </div>

  );
};

export default Todos;
