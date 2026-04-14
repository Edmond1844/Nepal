import styles from "./MainButton.module.css";

export default function MainButton({ children, className, variant, ...props }) {
  const buttonClass =
    variant === "active" ? styles.main_button_filtered_active : "";
  return (
    <>
      <button
        {...props}
        className={`${styles.main_button} ${className} ${buttonClass}`}
      >
        {children}
      </button>
    </>
  );
}
