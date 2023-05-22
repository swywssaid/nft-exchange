"use client";

import { useState } from "react";
import Logo from "../../common/Logo";
import Modal from "../../common/Modal/Modal";
import Profile from "../../profile/Profile";
import styles from "./Header.module.scss";
import Button from "../../common/Button/Button";
import { useWeb3React } from "@web3-react/core";

const Header = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const connectWallet = () => {};
  const { connector, account, isActive } = useWeb3React();

  const ButtonProps = {
    width: 200,
    height: 40,
    backgroundColor: "black",
    textColor: "white",
    text: "Connect Wallet",
    handleClick: connectWallet,
  };
  // connector.activate();
  console.log(connector, account, isActive);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={40} height={40} />
        <span className={styles.title}>Say so one back</span>
      </div>
      {
        // 지갑 활성화 유무에 따른 프로필 변화
        !isActive ? (
          <div className={styles.profile}>
            <Profile setIsVisibleModal={setIsVisibleModal} />
            {isVisibleModal && (
              <Modal>
                <span className={styles.modal__title}>Connect</span>
                <Button {...ButtonProps}></Button>
              </Modal>
            )}
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  );
};

export default Header;
