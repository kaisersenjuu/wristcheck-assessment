import styles from "./styles.module.scss";
import { Children } from "@/types/GeneralTypes";

type ContainerProps = {
  children: Children;
};

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
}): React.ReactElement => {
  return <section className={styles.container}>{children}</section>;
};

export default Container;
