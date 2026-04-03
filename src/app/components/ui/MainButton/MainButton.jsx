import styles from "./MainButton.module.css";

export default function MainButton({ children, className, ...props }) {
  return (
    <>
      <button {...props} className={`${styles.main_button} ${className || ""}`}>
        {children}
      </button>
    </>
  );
}
