import { Droplets, FileText, FireExtinguisher, Trees } from "lucide-react"

import ServiceCard from "./ServiceCard"
import type { ReactNode } from "react"

export default function Services() {

	type ServiceItems = {
		icon: ReactNode,
		title: string,
		descripition: string
	}

	const servicesCards: ServiceItems[] = [
		{ title: "Licenciamento Ambiental", descripition: "Garantia legal, agilidade e soluções sustentáveis e personalizadas para empreendimentos.", icon: <Trees className="mx-auto w-14 h-14 p-3 text-yellow-400" /> },
		{ title: "PGR", descripition: "Desenvolvemos PGRS com foco na conformidade legal, eficiência e soluções ambientais estratégicas para a gestão responsável de resíduos.", icon: <FileText className="mx-auto w-14 h-14 p-3 text-yellow-400" /> },
		{ title: "Combate ao Incêndio e Pânico", descripition: "Projetamos sistemas de combate a incêndio com foco em segurança, eficiência e conformidade, incluindo AVCB e sinalização de emergência.", icon: <FireExtinguisher className="mx-auto w-14 h-14 p-3 text-yellow-400" /> },
		{ title: "Precend - Copasa", descripition: "Regularização da rede de esgoto com agilidade e soluções personalizadas, atendendo às exigências técnicas e ambientais do seu empreendimento", icon: <Droplets className="mx-auto w-14 h-14 p-3 text-yellow-400" /> },
		{ title: "Precend - Copasa", descripition: "Regularização da rede de esgoto com agilidade e soluções personalizadas, atendendo às exigências técnicas e ambientais do seu empreendimento", icon: <Droplets className="mx-auto w-14 h-14 p-3 text-yellow-400" /> },
		{ title: "Precend - Copasa", descripition: "Regularização da rede de esgoto com agilidade e soluções personalizadas, atendendo às exigências técnicas e ambientais do seu empreendimento", icon: <Droplets className="mx-auto w-14 h-14 p-3 text-yellow-400" /> },
	]


	return (
		<section className="flex flex-col items-center xl:min-h-[calc(100vh-80px)] min-h-[80vh] scroll-mt-20 bg-[#F7F7F7] overflow-x-hidden" id="1">
			<div className="xl:w-[70%] w-11/12 ">
				<div className="flex  text-3xl md:text-4xl font-light mt-10 mb-14 ">
					Principais Serviços
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

					{servicesCards.map((item, index) =>
						<ServiceCard
							key={index}
							icon={item.icon}
							title={item.title}
							descripition={item.descripition}

						/>
					)}

				</div>

				{/* <div className="grid xl:grid-cols-3 grid-cols-1 gap-2" >
					
					{servicesCards.map((item, index) =>

						<ServiceCard
							key={index}
							img={item.img}
							title={item.title}
							descripition={item.descripition}
						/>

					)}
				</div>

				<div className="grid xl:grid-cols-2 grid-cols-1 gap-2 w-2/3 mt-4 mx-auto" >
					{servicesCards2.map((item, index) =>

						<ServiceCard
							key={index}
							img={item.img}
							title={item.title}
							descripition={item.descripition}
						/>

					)}
				</div> */}

			</div>
		</section>
	)
}