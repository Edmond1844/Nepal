import styles from "./SectionFastPick.module.css";

import Icon from "../../ui/Icon/Icon.jsx";

export default function SectionFastPick({ lang, language }) {
	return (
		<>
			<section className={`${styles.section_fast_pick} container`}>
				<h3 className={styles.section_fast_pick__title}>
					{language[lang].fastPickTitle}
				</h3>
				<div className={styles.section_fast_pick__filter_wrapper}>
					<div className={styles.section_fast_pick__filter_header}>
						<div className="flex items-center gap-2">
							<Icon name="icon-filter" className="w-5 h-5" />
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
						<div
							className={styles.section_fast_pick__search_wrapper}
						>
							<input
								type="text"
								className={
									styles.section_fast_pick__search_input
								}
							/>
							<Icon
								name="icon-search"
								className={
									styles.section_fast_pick__icon_search
								}
							/>
						</div>
						{/* <p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Error quaerat sequi commodi in laudantium
							exercitationem molestiae nisi nobis corrupti quam
							perspiciatis placeat amet, suscipit praesentium.
							Inventore vitae velit provident. Harum sunt nihil
							consectetur eligendi laborum quia, omnis laboriosam
							cupiditate? Eaque officiis possimus qui facere
							doloribus veniam sint ducimus totam neque. Tempora
							iste, veritatis suscipit nihil quaerat asperiores
							eos amet odio, iusto et nobis maxime nostrum, eum
							eligendi! Adipisci impedit, delectus possimus
							voluptatum temporibus corporis. Sint laborum numquam
							soluta ducimus consequatur cum cupiditate maxime
							eos, totam recusandae. Suscipit ab nemo similique.
							Sit doloremque voluptatem dolorum laboriosam,
							perferendis, dignissimos aspernatur facere sequi
							magnam temporibus perspiciatis saepe architecto
							laudantium, molestiae cupiditate! Cumque provident
							magnam atque exercitationem ipsa debitis, officiis
							rem. Mollitia numquam, repudiandae maxime amet ad
							reprehenderit, dignissimos repellat illo
							perspiciatis eligendi cum aut odit a ex voluptate
							vel earum officiis ipsa! Distinctio blanditiis
							necessitatibus fuga, ea pariatur quos eos minus,
							accusamus provident, cupiditate eius deserunt
							assumenda id architecto tempora autem labore
							recusandae corporis hic molestiae odio repellat!
							Consectetur magnam, facere animi sit, iure
							laudantium accusamus quod expedita unde alias
							tempore nesciunt repellat blanditiis, id
							perspiciatis vitae odit natus. Ratione, quas iste!
							Necessitatibus quibusdam porro hic in inventore
							harum dolorum alias rerum quam. Exercitationem earum
							nesciunt praesentium culpa ea nihil doloribus,
							eveniet, ut quas tempora odit expedita voluptas
							placeat. Id, optio veniam, sint neque, voluptatum
							odio deserunt itaque nemo saepe eius magnam cumque
							officiis. Autem a eveniet, iste molestias, magnam
							voluptatum inventore veniam fugiat deleniti error
							expedita minima necessitatibus cum totam. Totam
							libero beatae repudiandae modi voluptatem quo
							reprehenderit nihil eum, suscipit, expedita eius cum
							explicabo quos cumque sunt. Explicabo necessitatibus
							inventore harum ipsam cumque! Nobis molestiae
							eligendi sapiente nostrum doloremque, cumque amet
							modi itaque dolore sint non ea deserunt similique
							harum quam animi suscipit praesentium error rerum
							quibusdam, provident eius ratione, facere fuga?
							Sequi et modi porro vero adipisci, nemo soluta
							obcaecati doloremque cum dolorum aliquam temporibus?
							Tenetur quam temporibus quas quibusdam, obcaecati
							accusantium. Vel est ut facilis quis provident
							ducimus inventore voluptatem, maxime iste, autem
							molestias quasi a debitis ab ea neque quas
							voluptatibus! Officiis ipsam hic ratione quis sunt
							expedita numquam fugit, ad, nostrum, maiores ea
							accusamus? Quo temporibus molestiae voluptates
							atque. Quo officia, nemo eius officiis doloribus
							ipsa blanditiis dicta possimus deserunt cupiditate
							iste? Aliquid quasi pariatur assumenda, eaque
							deserunt voluptatem repudiandae, excepturi
							architecto nobis, magnam blanditiis! Unde aperiam
							ducimus rem aspernatur! Et quos blanditiis quam
							laudantium, facere ipsam tempora hic possimus
							laborum modi. Itaque voluptate quidem tenetur.
							Deleniti expedita dolores earum impedit numquam,
							quasi voluptatem, quo autem aliquam quaerat amet
							molestiae minus provident odit magnam, officia ipsum
							aspernatur. Adipisci quaerat at necessitatibus
							facilis expedita dignissimos quibusdam beatae odio
							praesentium ullam sunt sapiente vero error
							aspernatur ipsum, doloremque molestiae saepe
							blanditiis explicabo earum! Eligendi ab ducimus hic
							commodi architecto placeat, id nobis molestiae. A
							ipsum porro dolorem error architecto veritatis enim
							ipsa, exercitationem animi adipisci ipsam modi
							delectus debitis provident? Possimus pariatur
							corporis repudiandae! Dicta vero nemo, repellendus
							reprehenderit nobis praesentium corrupti aliquid
							temporibus dolorem voluptatem officia? Minima, cum?
						</p> */}
					</div>
				</div>
			</section>
		</>
	);
}
