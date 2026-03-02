export default function Icon({ name, className = "w-5 h-5", ...props }) {
	return (
		<svg className={className} {...props}>
			<use href={`/icons/sprite.svg#${name}`} />
		</svg>
	);
}
