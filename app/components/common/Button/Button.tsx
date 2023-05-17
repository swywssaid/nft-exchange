import React from "react";
import styles from "./Button.module.scss";
import localFont from "next/font/local";
const abnbBd = localFont({ src: "../../../../public/fonts/AirbnbCereal_W_Bd.otf" });

interface ButtonProps {
  width: number;
  height: number;
  backgroundColor: string;
  textColor: string;
  text: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ width, height, backgroundColor, textColor, text, handleClick }) => {
  return (
    <button className={styles.button} style={{ width: width, height: height, backgroundColor, color: textColor }} onClick={handleClick}>
      <div className={abnbBd.className} style={{ width: "170px", height: "19px", fontSize: "15px" }}>
        {text}
      </div>
    </button>
  );
};

export default Button;
