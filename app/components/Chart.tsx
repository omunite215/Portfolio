import Image from "next/image";

const Chart = () => {
	return (
		<div
			className="py-4 md:px-0 px-4 transition ease-in-out delay-250 hover:-translate-y-0.5 hover:scale-110"
			id="skills"
		>
			<Image
				src="/chart.svg"
				quality={90}
				height={1000}
				width={1000}
				priority={true}
				alt="FlowChart"
				className="object-fill sm:block hidden"
			/>
			<Image
				src="/chartMobile.svg"
				quality={90}
				height={1000}
				width={1000}
				priority={true}
				alt="FlowChart"
				className="object-fill sm:hidden block"
			/>
		</div>
	);
};

export default Chart;
