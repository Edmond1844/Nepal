export default function SectionFastPick({ lang, language }) {
	return (
		<>
			<section>
				<div>
					<h2>{language[lang].fastPickTitle}</h2>
				</div>
			</section>
		</>
	);
}
