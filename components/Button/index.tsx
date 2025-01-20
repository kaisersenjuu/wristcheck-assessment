import styles from "./styles.module.scss";

const Button: React.FunctionComponent<{
  text: string;
  type: string;
}> = ({ text, type }): React.ReactElement => {
  return (
    // reusable button component based on button type
    <button
      className={
        type === "primary" ? `${styles.primary}` : `${styles.secondary}`
      }
    >
      {text}
    </button>
  );
};

export default Button;
