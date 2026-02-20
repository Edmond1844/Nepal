import styles from "./MainButton.module.css";

export default function MainButton({ children, className }) {
	return (
		<>
			<button className={`${styles.main_button} ${className || ""}`}>
				{children}
			</button>
		</>
	);
}
