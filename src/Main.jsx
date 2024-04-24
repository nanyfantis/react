import React from "react";
import { useState } from "react";
import "./styles.css";





const Main = () => {
  const [inputValue, setInputValue] = useState("");

  function display(value) {
    setInputValue((prevValue) => prevValue + value);
  }

  function calculate() {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  }

  function clear() {
    setInputValue("");
  }

  function handleButtonClick(e, value) {
    e.preventDefault();
    display(value);
  }

  function handleEqualButtonClick(e) {
    e.preventDefault();
    calculate();
  }

  return (
    <form name='calc' className='calculator'>
      <input type='text' className='value' value={inputValue} readOnly />
      <button className='num clear' onClick={(e) => clear(e)}>
        C
      </button>
      <button className='num divide' onClick={(e) => handleButtonClick(e, "/")}>
        /
      </button>
      <button className='num multiple' onClick={(e) => handleButtonClick(e, "*")}>
        *
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "7")}>
        7
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "8")}>
        8
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "9")}>
        9
      </button>
      <button className='num subtract' onClick={(e) => handleButtonClick(e, "-")}>
        -
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "4")}>
        4
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "5")}>
        5
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "6")}>
        6
      </button>
      <button className='num plus' onClick={(e) => handleButtonClick(e, "+")}>
        +
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "1")}>
        1
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "2")}>
        2
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "3")}>
        3
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "0")}>
        0
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, "00")}>
        00
      </button>
      <button className='num' onClick={(e) => handleButtonClick(e, ".")}>
        .
      </button>
      <button className='num equal' onClick={(e) => handleEqualButtonClick(e)}>
        =
      </button>
    </form>
  );
};

export default Main;


// const main = () => {
//   const [inputValue, setInputValue] = useState("");
//   function display(value) {
//     setInputValue(inputValue + value);
//   }

//   function calculate() {
//     const result = eval(inputValue);
//     setInputValue(result);
//   }

//   function clear() {
//     setInputValue("");
//   }

//   return (
//     <>
//       <form name='calc' className='calculator'>
//         <input type='text' className='value' value={inputValue} />
//         <span className='num clear' onClick={() => clear()}>
//           C
//         </span>
//         <span className='divide' onClick={() => display("/")}>/</span>
//         <span className='multiple' onClick={() => display("*")}>*</span>
//         <span onClick={() => display("7")}>7</span>
//         <span onClick={() => display("8")}>8</span>
//         <span onClick={() => display("9")}>9</span>
//         <span className='subtract' onClick={() => display("-")}>-</span>
//         <span onClick={() => display("4")}>4</span>
//         <span onClick={() => display("5")}>5</span>
//         <span onClick={() => display("6")}>6</span>
//         <span className='plus' onClick={()=> display('+')}>+</span>
//         <span onClick={() => display("1")}>1</span>
//         <span onClick={() => display("2")}>2</span>
//         <span onClick={() => display("3")}>3</span>
//         <span onClick={() => display("0")}>0</span>
//         <span onClick={() => display("0")}>00</span>
//         <span  onClick={()=> display('.')}>.</span>
//         <span  onClick={()=> calculate()} className='num equal'>=</span>
//       </form>
//     </>
//   );
// };

// export default main;
