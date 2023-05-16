import Vector from "../common/Vector";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}></div>
      <div className={styles.vector}>
        <Vector width={24} height={24} />
      </div>
    </div>
  );
};

export default Profile;
