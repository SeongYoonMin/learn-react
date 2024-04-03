interface Props {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function CustomButton(props: Props) {
  return (
    <button
      type={props.type ? props.type : "button"}
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </button>
  );
}
