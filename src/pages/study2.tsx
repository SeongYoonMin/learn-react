import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  return (
    <>
      <h1>
        Light State = {light} {light === "OFF" ? "🩶" : "💛"}
      </h1>
      <button
        type="button"
        onClick={() => setLight(light === "OFF" ? "ON" : "OFF")}
      >
        light ON/OFF
      </button>
    </>
  );
};

const Count = () => {
  const [countState, setCountState] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setCountState(countState + 1)}>
        Click Me
      </button>
      <button type="button" onClick={() => setCountState(0)}>
        RESET
      </button>
      <p>{countState}</p>
    </>
  );
};

function study2() {
  /**
   * 상태관리(useState)를 쓰는 이유
   * - 일반적인 변수의 값을 바꾸게 되면 re-rendering이 일어나지 않아 화면에 갱신이안된다.
   * - 상태관리를 쓰게되면 re-rendering이 일어나 값이 갱신된다.
   */

  /**
   * React Component re-rendering
   * - State 변경시
   * - Props 변경시
   * - 부모 컴포넌트 변경시
   */

  return (
    <>
      <Count />
      <br />
      <br />
      <Bulb />
    </>
  );
}

export default study2;
