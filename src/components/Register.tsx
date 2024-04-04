import styled from "@emotion/styled";
import { ChangeEventHandler, FormEvent, useState } from "react";

/**
 * 회원가입 폼
 *
 * - 이름
 * - 생년월일
 * - 국적
 * - 자기소개
 */

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Register = () => {
  const [userRegister, setUserRegister] = useState({
    userName: "",
    userBirth: "",
    userCountry: "",
    userInfo: "",
  });
  const onChangeUser: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };
  const submitEventHandle = (e: FormEvent) => {
    e.preventDefault();
    console.log(userRegister);
  };
  return (
    <RegisterForm onSubmit={submitEventHandle}>
      <input
        type="text"
        name="userName"
        value={userRegister.userName}
        placeholder="이름"
        onChange={onChangeUser}
      />
      <input
        type="date"
        name={userRegister.userBirth}
        value={userRegister.userBirth}
        onChange={onChangeUser}
      />
      <select
        id="country"
        name={userRegister.userCountry}
        value={userRegister.userCountry}
        onChange={onChangeUser}
      >
        <option value="0">국가를 선택해주세요</option>
        <option value="1">대한민국</option>
        <option value="2">미국</option>
        <option value="3">일본</option>
      </select>
      <textarea
        id="userInfo"
        cols={30}
        rows={10}
        name={userRegister.userInfo}
        value={userRegister.userInfo}
        onChange={onChangeUser}
        placeholder="자기소개를 적어주세요."
      ></textarea>
      <button type={"submit"}>회원가입</button>
    </RegisterForm>
  );
};
