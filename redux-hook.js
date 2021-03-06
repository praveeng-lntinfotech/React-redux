//this is working like with connect functionality

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux";

function HookBookContainer() {
  const numberOfBooks = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hook Container</h1>
      <h3>Number of Books- {numberOfBooks}</h3>
      <button
        onClick={() => {
          dispatch(buyBook());
        }}
      >
        Buy Book
      </button>
    </div>
  );
}

export default HookBookContainer;
