import CustomButton from "./components/custom/Button";
import CustomInput from "./components/custom/Input";

function App() {
  const buttonList = [
    {
      text: "asdf",
    },
    {
      text: "1234",
    },
  ];
  const spreadButton = {
    width: 390,
    height: 390,
  };
  const inputProps: {
    type: "text" | "password" | "email";
    placeholder?: string;
  } = {
    type: "text",
    placeholder: "이것은 Emotion의 styled를 이용해 만든 CustomInput입니다.",
  };
  return (
    <>
      {/* Array.map()을 이용해 Component 반복 */}
      {buttonList.map((items, index) => {
        return <CustomButton key={index}>{items.text}</CustomButton>;
      })}
      {/* 스프레드연산자를 이용해 Props 할당 */}
      <CustomButton {...spreadButton} />
      <CustomInput {...inputProps} />
    </>
  );
}

export default App;
