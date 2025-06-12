import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import slider2 from "../assets/slider2.jpg";
import slider1 from "../assets/slider1.jpg";
import { useState } from "react";


export default function Slider() {
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<section id="0" className="h-[70vh] mt-20 sm:h-[50vh] md:h-[60vh] lg:h-[80vh] w-screen bg-neutral-900 z-10 flex items-center justify-center">
			<Swiper
				modules={[Pagination, Autoplay]}
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				effect="fade"
				speed={700}
				slidesPerView={1}
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
			>
				<SwiperSlide>
					<div className="relative w-full h-full">
						<img
							src={slider2}
							alt="Slide 1"
							width={1920}
							height={1080}
							className="h-[70vh] sm:h-[60vh] md:h-[60vh] lg:h-[80vh] w-full object-cover opacity-80"

						/>
						{activeIndex === 0 && (
							<motion.div
								initial={{ y: 150, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8 }}
								className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
							>
								<h2 className="text-xl md:text-4xl font-bold mb-4">Engenharia</h2>
								<p className="mb-4 text-sm md:text-base">
									Tecnologia e expertise para construir o futuro.
								</p>
								<button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
									Saiba mais
								</button>
							</motion.div>
						)}
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="relative w-full h-full">
						<img
							src={slider1}
							alt="Slide 2"
							className="h-[70vh] sm:h-[60vh] md:h-[60vh] lg:h-[80vh] w-full object-cover  opacity-80"

						/>
						{activeIndex === 1 && (
							<motion.div
								initial={{ y: 150, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8 }}
								className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
							>
								<h2 className="text-xl md:text-4xl font-bold mb-4">Segurança do Trabalho</h2>
								<p className="mb-4 text-sm md:text-base">
									Chame a atenção com um bom texto.
								</p>
								<button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
									Ver mais
								</button>
							</motion.div>
						)}
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
