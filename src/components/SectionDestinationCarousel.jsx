/** import swiper core and required modules */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

/** import Swiper styles */
import 'swiper/css';
import 'swiper/css/navigation';

import Beach_01 from '../assets/beach-01.jpg';
import Beach_02 from '../assets/beach-02.jpg';
import Beach_03 from '../assets/beach-03.jpg';
import Beach_04 from '../assets/beach-04.jpg';
import Beach_05 from '../assets/beach-05.jpg';
import Beach_06 from '../assets/beach-06.jpg';
import Beach_07 from '../assets/beach-07.jpg';
import Beach_08 from '../assets/beach-08.jpg';

const SectionDestinationCarousel = () => {
	return (
		<div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-16">
			<Swiper
				/** install swiper modules */
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
			>
				<SwiperSlide>
					<img
						src={Beach_01}
						alt="beach-01"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_02}
						alt="beach-02"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_03}
						alt="beach-03"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_04}
						alt="beach-04"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_05}
						alt="beach-05"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_06}
						alt="beach-06"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_07}
						alt="beach-07"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={Beach_08}
						alt="beach-08"
						className="h-[350px] w-full rounded-md object-cover object-center md:h-[450px]"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SectionDestinationCarousel;
