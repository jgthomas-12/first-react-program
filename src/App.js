import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Counter.css";
import Test from "./Test";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Counter />
      </div>
    </>
  );
};

// function App() {
//   const [toggle, updatetoggle] = useState(false);
//   return (
//     <div>
//       <button onClick={() => {
//         updatetoggle(!toggle);
//       }}
//       >
//         Toggle
//       </button>
//       {toggle && <Test />}
//     </div>
//   )
// }

export default App;
