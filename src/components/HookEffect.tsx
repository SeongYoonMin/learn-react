import React, { useState, useEffect } from "react";

export default function UseEffectStudy() {
  const [count, setCount] = useState(0);

  /**
   * Side Effects를 수행하기 위한 Hooks
   * 첫번째 인자: API호출이나 이벤트리스너 설정같은 부수 효과(Side Effects)
   * 두번째 인자: 의존성 배열(Dependency Array) - 해당 배열의 값이 변경될 시 Callback 실행
   * useEffect(() => {
   *   API 호출 또는 다른 부수 효과 설정
   * }, [dependency]);
   */
  useEffect(() => {
    // count의 State값이 변경 될 시 useEffect의 Callback Function 실행.
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
