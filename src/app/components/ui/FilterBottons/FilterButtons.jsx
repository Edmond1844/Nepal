import MainButton from "../MainButton/MainButton";
export default function FilterButton({ name, onClick, ...props }) {
	return (
		<>
			<MainButton {...props} onClick={onClick}>
				{name}
			</MainButton>
		</>
	);
}
