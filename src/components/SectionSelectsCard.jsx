const SectionSelectsCard = (props) => {
	return (
		<div className="relative">
			<img
				className="h-full w-full rounded-md object-cover object-center"
				src={props.destinationImage}
				alt="Maldives"
			/>
			<div className="absolute top-0 left-0 h-full w-full bg-gray-900/30">
				<p className="absolute left-4 bottom-4 text-2xl font-semibold text-white">
					{props.destinationName}
				</p>
			</div>
		</div>
	);
};

export default SectionSelectsCard;
