import React from "react";

export default function LayoutHeader(props: {
  children: React.ReactNode;
  path: string;
}) {
  return (
    <>
      <header>
        <a href={props.path}>{props.children}</a>
      </header>
    </>
  );
}
