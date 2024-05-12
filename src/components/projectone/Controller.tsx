import React from "react";

export default function Controller({
  onClickHandle,
}: {
  onClickHandle: (values: number) => void;
}) {
  const buttonStyles =
    " px-3 bg-white block box-border border border-solid border-[#E0E0E0] rounded font-medium hover:text-[#FF8412] duration-300";
  return (
    <section className="bg-[#F5F5F5] w-full rounded border border-solid border-[#E0E0E0] p-5 box-border flex items-center justify-start gap-2">
      <button className={buttonStyles} onClick={() => onClickHandle(-1)}>-1</button>
      <button className={buttonStyles} onClick={() => onClickHandle(-10)}>-10</button>
      <button className={buttonStyles} onClick={() => onClickHandle(-100)}>-100</button>
      <button className={buttonStyles} onClick={() => onClickHandle(100)}>+100</button>
      <button className={buttonStyles} onClick={() => onClickHandle(10)}>+10</button>
      <button className={buttonStyles} onClick={() => onClickHandle(1)}>+1</button>
    </section>
  );
}
