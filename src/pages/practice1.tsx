/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
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
  const Todo = styled.main`
    width: "50vw";
    height: "80vh";
    background-color: "#F5F5F5";
    margin: "40px auto";
    display: "flex";
    align-items: "center";
    justify-content: "start";
    flex-direction: "column";
    gap: "40px";
    border: "1px solid #F0F0F0";
    border-radius: "8px";
    box-sizing: "border-box";
    padding: "8px 4px";
  `;
  const TodoHeader = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: 500;
    padding: 20px 0;
  `
  return (
    
    <Todo>
        <TodoHeader>To Do</TodoHeader>
    </Todo>
    
  );
}
