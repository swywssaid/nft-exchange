import Logo from "../../common/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo width={36} height={20} />
      <span className={styles.title}>Renaissance Lab.</span>
    </div>
  );
};

export default Header;
