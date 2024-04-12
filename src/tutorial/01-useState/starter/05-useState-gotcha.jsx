import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // //  be careful it's the old value
    // console.log(value);
    // //  so if you have any functionality
    // // that relies on the latest value
    // // it will be wrong !!!

    // setValue((currentState) => {
    //   // must return otherwise undefined
    //   // below is the latest/current state value
    //   const newState = currentState + 1;
    //   return newState;
    // });
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};
export default UseStateGotcha;
