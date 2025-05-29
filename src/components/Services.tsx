import service1 from "../assets/service1.jpg"
import service2 from "../assets/service2.jpg"
import service3 from "../assets/service3.jpg"
import service4 from "../assets/service4.jpg"
import ServiceCard from "./ServiceCard"

export default function Services() {

	type ServiceItems = {
		img: string,
		title: string,
		descripition: string
	}

	const servicesCards: ServiceItems[] = [
		{ img: service1, title: "Licenciamento Ambiental", descripition: "Garantia legal, agilidade e soluções sustentáveis e personalizadas para empreendimentos." },
		{ img: service2, title: "PGR", descripition: "Desenvolvemos PGRS com foco na conformidade legal, eficiência e soluções ambientais estratégicas para a gestão responsável de resíduos." },
		{ img: service3, title: "Combate ao Incêndio e Pânico", descripition: "Projetamos sistemas de combate a incêndio com foco em segurança, eficiência e conformidade, incluindo AVCB e sinalização de emergência." },
	]

	const servicesCards2: ServiceItems[] = [
		{ img: service4, title: "Precend - Copasa", descripition: "Regularização da rede de esgoto com agilidade e soluções personalizadas, atendendo às exigências técnicas e ambientais do seu empreendimento." },
		{ img: service1, title: "Licenciamento Ambiental", descripition: "Garantia legal, agilidade e soluções sustentáveis e personalizadas para empreendimentos." },
	]

	return (
		<section className="flex flex-col items-center justify-center">
			<div className="xl:w-[60%] w-11/12 ">
				<div className="flex items-center justify-center my-8 text-3xl md:text-4xl font-medium ">
					Serviços
				</div>
				<div className="grid xl:grid-cols-3 grid-cols-1 gap-2" >
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
				</div>

			</div>
		</section>
	)
}