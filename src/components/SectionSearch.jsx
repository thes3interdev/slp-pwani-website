import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const SectionSearch = () => {
	return (
		<div className="mx-auto grid max-w-[1240px] gap-4 px-4 py-16 lg:grid-cols-3">
			{/** left section start */}
			<div className="flex flex-col justify-evenly lg:col-span-2">
				<div>
					<h2 className="uppercase">Luxury Included Vacations for Two People</h2>
					<p className="py-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique,
						eveniet quas fuga illum odit soluta repellat deleniti labore explicabo
						recusandae dignissimos eaque quis impedit autem aliquid magni? Sit, voluptas
						animi odio facilis est incidunt repudiandae maiores quasi delectus temporibus
						ab quae recusandae accusantium eaque magnam soluta debitis culpa maxime
						corporis deleniti? Dicta voluptate, sapiente distinctio quos placeat eveniet
						vel tenetur commodi alias, vero totam voluptatum iste neque fugit iure
						accusamus corrupti numquam eius natus similique aliquam ad dignissimos.
						Voluptatem dolorem earum officiis. Maiores obcaecati amet doloribus commodi
						quaerat!
					</p>
				</div>
				<div className="grid gap-8 py-4 sm:grid-cols-2">
					<div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
						<button>
							<RiCustomerService2Fill size={50} />
						</button>
						<div className="uppercase lg:ml-2">
							<h3 className="py-1">Leading Service</h3>
							<p className="py-1">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
						<button>
							<MdOutlineTravelExplore size={50} />
						</button>
						<div className="uppercase lg:ml-2">
							<h3 className="py-1">Leading Service</h3>
							<p className="py-1">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/** left section end */}

			{/** right section start */}
			<div>
				<div className="rounded-md border p-2 text-center uppercase">
					<p className="pt-2">Get An Additional 10% Off</p>
					<p className="py-4">12 Hours Left</p>
					<p className="rounded-md bg-gray-800 py-2 text-gray-200">Book Now and Save</p>
				</div>
				<form className="w-full">
					<div className="my-3 flex flex-col uppercase">
						<label className="font-semibold">Destination</label>
						<select className="rounded-md border p-2">
							<option>Grand Antigua</option>
							<option>Key West</option>
							<option>Mombasa</option>
							<option>Maldives</option>
							<option>Zanzibar</option>
						</select>
					</div>
					<div className="my-2 flex flex-col uppercase">
						<label className="font-semibold">Check-In</label>
						<input type="date" className="rounded-md border p-2" />
					</div>
					<div className="my-2 flex flex-col uppercase">
						<label className="font-semibold">Check-Out</label>
						<input type="date" className="rounded-md border p-2" />
					</div>
					<div>
						<button className="my-4 w-full">Rates & Availability</button>
					</div>
				</form>
			</div>
			{/** right section end */}
		</div>
	);
};

export default SectionSearch;
