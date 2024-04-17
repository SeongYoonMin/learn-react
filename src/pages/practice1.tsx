import React from "react";

/**
 * TITLE: TodoList
 * 기능구현: {
 *  1. CRUD
 *  2. CheckBox
 * }
 *
 * 심화기능: {
 *  1. 순서변경
 * }
 */

export default function TodoList() {
  const mainDesign: React.CSSProperties = {
    width: "50vw",
    height: "80vh",
    backgroundColor: "#F5F5F5",
    margin: "40px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    gap: "40px",
    border: "1px solid #F0F0F0",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "8px 4px",
  };
  const headerOneDesign: React.CSSProperties = {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "500",
    padding: "20px 0",
  };
  return (
    <main style={mainDesign}>
      <h1 style={headerOneDesign}>To Do</h1>
    </main>
  );
}
