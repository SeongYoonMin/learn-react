import styled from "@emotion/styled";

const Input = styled.input`
  color: #020715;
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #020715;
  border-radius: 50px;
  padding: 8px 16px;
  transition: all 0.3s;
  &:hover {
    color: white;;
    background-color: darkblue;
    &::placeholder {
      color: white;
    }
  }
`;

const CustomInput = (props: {
  type: "text" | "password" | "email";
  placeholder?: string;
}) => {
  return (
    <Input type={props.type} placeholder={props.placeholder ?? ""}></Input>
  );
};

export default CustomInput;
