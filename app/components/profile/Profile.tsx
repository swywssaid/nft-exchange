import Vector from "../common/Vector";
import styles from "./Profile.module.scss";

interface profileProps {
  setIsVisibleModal: (isvisible: boolean | ((prev: boolean) => boolean)) => void;
}

const Profile: React.FC<profileProps> = ({ setIsVisibleModal }) => {
  return (
    <div className={styles.container} onClick={() => setIsVisibleModal((prev) => !prev)}>
      <div className={styles.profile}></div>
      <div className={styles.vector}>
        <Vector width={24} height={24} />
      </div>
    </div>
  );
};

export default Profile;
