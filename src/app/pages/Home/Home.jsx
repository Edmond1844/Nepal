import Hero from "../../components/layout/Hero/Hero.jsx";
import SectionFastPick from "../../components/sections/SectionFastPick/SectionFastPick.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

export default function Home({ lang, setLang, language }) {
	return (
		<>
			<Hero lang={lang} setLang={setLang} language={language} />
			<main>
				<SectionFastPick lang={lang} language={language} />
			</main>
			<Footer />
		</>
	);
}
