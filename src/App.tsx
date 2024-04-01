// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
import React from "react";
import CustomButton from "./components/custom/Button";

function App() {
  const buttonList = [
    {
      text: "asdf",
    },
    {
      text: "1234",
    },
  ];
  const spreadButton = {
    width: 390,
    height: 390,
  };
  return (
    <>
      {/* Array.map()을 이용해 Component 반복 */}
      {buttonList.map((items, index) => {
        return <CustomButton key={index}>{items.text}</CustomButton>;
      })}
      {/* 스프레드연산자를 이용해 할당 */}
      <CustomButton {...spreadButton} />
    </>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/" />
    // </Routes>
  );
}

export default App;
