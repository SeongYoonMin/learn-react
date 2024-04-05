import { useState } from "react";

function useStateCount(): [number, () => void] {
  // use를 붙여 Custom Hooks로 생성
  const [state, setState] = useState(0);
  const onCount = () => {
    setState(state + 1);
  };
  return [state, onCount];
}

function useInput(): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] {
  const [input, setInput] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return [input, onChangeInput];
}

export default function HookExam() {
  const [count, onCount] = useStateCount();
  const [input, onChangeInput] = useInput();
  return (
    <>
      <button onClick={onCount}>state</button>
      <p>{count}</p>
      <input type="text" value={input} onChange={onChangeInput} />
    </>
  );
}
