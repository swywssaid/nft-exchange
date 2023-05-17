import styles from "./Modal.module.scss";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <article className={styles.content}>{children}</article>
    </div>
  );
};

export default Modal;
