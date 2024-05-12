import React, { useState } from "react";
import Viewer from "../components/projectone/Viewer";
import Controller from "../components/projectone/Controller";

export default function MainProjectOne() {
  const [count, setCount] = useState(0);

  const onClickButton = (value:number) => {
    setCount(count + value);
  }
  return (
    <main className="box-border p-2 flex flex-col items-start justify-center gap-2 w-full max-w-[500px]">
      <h1 className="text-3xl font-bold w-full">Simple Counter</h1>
      <Viewer count={count} />
      <Controller onClickHandle={onClickButton} />
    </main>
  );
}
