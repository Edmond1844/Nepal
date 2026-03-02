import styles from "./SectionFastPick.module.css";

// import iconFilter from "../../../../images/svg/icon-filter.svg";

export default function SectionFastPick({ lang, language }) {
	return (
		<>
			<section className={`${styles.section_fast_pick} container`}>
				<h3 className={styles.section_fast_pick__title}>
					{language[lang].fastPickTitle}
				</h3>
				<div className={styles.section_fast_pick__filter_wrapper}>
					<div className={styles.section_fast_pick__filter_header}>
						{/* Установить библиотеку  Tailwind  */}
						<div className="flex items-center gap-2">
							{/* <img src={iconFilter} aria-hidden="true" /> */}
							<h3
								className={
									styles.section_fast_pick__filter_title
								}
							>
								{language[lang].fastPickFilterTitle}
							</h3>
						</div>

						<button
							className={styles.section_fast_pick__filter_button}
						>
							{language[lang].fastPickFilterButtonRest}
						</button>
					</div>
					<div className={styles.section_fast_pick__search}>
						<label
							className={styles.section_fast_pick__search_label}
						>
							поиск
						</label>
						<input
							type="text"
							className={styles.section_fast_pick__search_input}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
