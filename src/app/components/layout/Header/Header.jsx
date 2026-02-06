import styles from "./Header.module.css";
import { translations } from "../../../../data/data-languages";

export default function Header({ lang }) {
	console.log(translations);
	return (
		<>
			<header>
				<h2>
					Nepal Peak Station
					<span>{translations[lang].headerLogo}</span>
				</h2>
			</header>
		</>
	);
}
