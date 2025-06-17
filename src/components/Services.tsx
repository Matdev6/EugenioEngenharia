import { Trees, FileText, FireExtinguisher, Droplets, ShieldAlert, Clipboard } from 'lucide-react';

import ServiceCard from "./ServiceCard"
import type { ReactNode } from "react"

export default function Services() {

	type ServiceItems = {
		icon: ReactNode,
		title: string,
		description: string
	}

	const servicesCards: ServiceItems[] = [
		{
			title: "Licenciamento Ambiental",
			description: "Auxiliamos empresas na regularização ambiental, com agilidade, segurança técnica e foco em soluções sustentáveis.",
			icon: <Trees className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "Plano de Gerenciamento de Resíduos",
			description: "Desenvolvimento do PGRS, garantindo o correto manejo, controle e destinação de resíduos, conforme normas ambientais.",
			icon: <FileText className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "AVCB – Auto de Vistoria do Corpo de Bombeiros",
			description: "Elaboração de projetos e assessoria completa para obtenção do AVCB, promovendo segurança contra incêndios.",
			icon: <FireExtinguisher className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "Precend – Controle de Efluentes",
			description: "Atuamos no controle e adequação de efluentes não domésticos, cumprindo as exigências legais e ambientais.",
			icon: <Droplets className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "Plano de Gerenciamento de Riscos",
			description: "Análise, prevenção e controle de riscos operacionais, ambientais e ocupacionais para segurança de processos e pessoas.",
			icon: <ShieldAlert className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		},
		{
			title: "LTCAT – Laudo Técnico",
			description: "Emissão de Laudo Técnico sobre Condições Ambientais, identificando agentes nocivos para garantir segurança trabalhista.",
			icon: <Clipboard className="mx-auto w-14 h-14 p-3 text-yellow-400" />
		}
	];


	return (
		<section className="flex flex-col items-center xl:min-h-[calc(100vh-80px)] min-h-[80vh] scroll-mt-20 bg-[#F7F7F7] overflow-x-hidden" id="2">
			<div className="xl:w-[80%] w-11/12 ">
				<div className="flex  text-3xl md:text-4xl font-light mt-10 mb-14 ">
					<h1>
						Principais Serviços
					</h1>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

					{servicesCards.map((item, index) =>
						<ServiceCard
							key={index}
							icon={item.icon}
							title={item.title}
							description={item.description}

						/>
					)}

				</div>
				<div>
					<h1 className='text-3xl md:text-4xl font-light my-4'>
						Serviços Detalhados
					</h1>
					<div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
						<div className='shadow-xl rounded-md border border-neutral-300 p-8 mt-4 bg-green-50 text-green-800'>
							<h2 className='text-center mb-4 text-2xl'>Meio Ambiente</h2>
							<div className=''>
								<li>Licenciamento Ambiental (Estadual, Municipal)</li>
								<li>Plano de Gerenciamento de Resíduos Sólidos </li>
								<li>Relatório de Atividades Potencialmente Poluidoras – RAPP</li>
								<li>Programa de Recebimento e Controle de Efluentes Não Domésticos – Precend </li>
								<li>Outorgas </li>
							</div>
						</div>
						
						<div className='shadow-xl rounded-md border border-yellow-300 p-8 mt-4 bg-yellow-50 text-yellow-800'>
							<h2 className='text-center mb-4 text-2xl'>Segurança do Trabalho</h2>
							<div className=''>
								<li>Projeto de Segurança Contra Incêndio e Pânico - PSCIP </li>
								<li>Plano de Gerenciamento de Riscos</li>
								<li>Laudo Técnico das Condições do Ambiente de Trabalho — LTCAT</li>
								<li>Laudo de Insalubridade</li>
								<li>Mapa de Risco</li>
								<li>Treinamentos</li>
								<li>Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção — PCMAT</li>
								<li>Laudos técnicos e perícias de segurança do trabalho </li>
							</div>
						</div>

						<div className='shadow-xl rounded-md border border-red-300 p-8 mt-4 bg-red-50 text-red-900'>
							<h2 className='text-center mb-4 text-2xl'>Regularização Urbana</h2>
							<div className=''>
								<li>Estudo de Impacto da Vizinhança – EIV </li>
								<li>Licenciamento de Engenho de Publicidade</li>
								<li>Licenciamento de Toldo</li>
								<li>Licenciamento de Mesas e Cadeiras</li>
								<li>Habite-se</li>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}