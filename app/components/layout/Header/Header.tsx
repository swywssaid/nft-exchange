import Logo from "../../common/Logo";
import Profile from "../../profile/Profile";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={36} height={20} />
        <span className={styles.title}>Renaissance Lab.</span>
      </div>
      <div className={styles.profile}>
        <Profile />
      </div>
    </div>
  );
};

export default Header;
