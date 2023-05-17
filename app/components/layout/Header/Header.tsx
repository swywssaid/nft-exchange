"use client";

import { useState } from "react";
import Logo from "../../common/Logo";
import Modal from "../../common/Modal/Modal";
import Profile from "../../profile/Profile";
import styles from "./Header.module.scss";
import Button from "../../common/Button/Button";

const Header = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const connectWallet = () => {};

  const ButtonProps = {
    width: 200,
    height: 40,
    backgroundColor: "black",
    textColor: "white",
    text: "Connect Wallet",
    handleClick: connectWallet,
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={36} height={20} />
        <span className={styles.title}>Renaissance Lab.</span>
      </div>
      <div className={styles.profile}>
        <Profile setIsVisibleModal={setIsVisibleModal} />
        {isVisibleModal && (
          <Modal>
            <span className={styles.modal__title}>Connect</span>
            <Button {...ButtonProps}></Button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;
