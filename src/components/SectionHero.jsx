import HeroBgVideo from '../assets/beachVideo.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const SectionHero = () => {
	return (
		<div className="relative h-screen w-full">
			<video
				src={HeroBgVideo}
				autoPlay
				loop
				muted
				className="h-full w-full object-cover object-center"
			/>

			{/** overlay start */}
			<div className="absolute top-0 left-0 h-full w-full bg-gray-900/30"></div>
			{/** overlay end */}

			<div className="absolute top-0 flex h-full w-full flex-col justify-center p-4 text-center text-white">
				<h1>First Class Travel</h1>
				<h2 className="py-3">Top Locations Worldwide</h2>

				{/** entry form start */}
				<form className="mx-auto flex w-full max-w-[700px] items-center justify-between rounded-md border bg-gray-100/90 p-1 text-black">
					<div>
						<input
							className="w-[250px] border-transparent bg-transparent focus:outline-none sm:w-[400px]"
							type="text"
							placeholder="Search Destinations"
						/>
					</div>
					<div>
						<button>
							<AiOutlineSearch className="icon" style={{ color: '#ffffff' }} size={21} />
						</button>
					</div>
				</form>
				{/** entry form end */}
			</div>
		</div>
	);
};

export default SectionHero;
