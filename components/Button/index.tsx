import styles from "./styles.module.scss";

const Button: React.FunctionComponent<{
  text: string;
  type: string;
  buttonType: "submit" | "reset" | "button";
  clicked?: () => void;
}> = ({ text, type, buttonType, clicked }): React.ReactElement => {
  return (
    // reusable button component based on button type
    <button
      className={
        type === "primary" ? `${styles.primary}` : `${styles.secondary}`
      }
      type={buttonType}
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default Button;
