import styles from "./styles.module.scss";
import { Children } from "@/types/GeneralTypes";

type WrapperProps = {
  children: Children;
};

const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
}): React.ReactElement => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
