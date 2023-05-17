"use client";

import { useEffect, useState } from "react";
import Logo from "../../common/Logo";
import Modal from "../../common/Modal/Modal";
import Profile from "../../profile/Profile";
import styles from "./Header.module.scss";
import Button from "../../common/Button/Button";
import { useWeb3React } from "@web3-react/core";

const Header = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const connectWallet = () => {};
  const context = useWeb3React();

  const ButtonProps = {
    width: 200,
    height: 40,
    backgroundColor: "black",
    textColor: "white",
    text: "Connect Wallet",
    handleClick: connectWallet,
  };
  context.connector.deactivate;
  console.log({ ...context });

  useEffect(() => {
    if ((window as any).ethereum === undefined) {
      // 지갑이 설치 안되어있으면 설치 페이지를 오픈
      window.open("https://metamask.io/download.html");
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo width={36} height={20} />
        <span className={styles.title}>Renaissance Lab.</span>
      </div>
      {
        // 지갑 활성화 유무에 따른 프로필 변화
        !context.isActive ? (
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
