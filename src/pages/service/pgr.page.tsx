import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';
import { BriefcaseBusiness, CalendarClockIcon, ChartBarDecreasing, LaptopMinimalCheckIcon, Megaphone, Newspaper, PencilRuler, Phone, Search, Verified, X } from 'lucide-react';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>PGR - Programa de Gerenciamento de Riscos </title>
                <meta name="description" content="O PGR (Programa de Gerenciamento de Riscos) é um documento obrigatório exigido pela NR-01, que tem como objetivo identificar, avaliar e controlar os riscos ocupacionais presentes nas atividades da empresa." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'><LaptopMinimalCheckIcon className='w-6 h-6 xl:w-7 xl:h-7' /> O que é o PGR e por que sua empresa precisa dele?</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'>O <strong className='font-semibold'>PGR (Programa de Gerenciamento de Riscos)</strong> é um documento obrigatório exigido pela NR-01, que tem como objetivo identificar, avaliar e controlar os riscos ocupacionais presentes nas atividades da empresa.</p>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Ele é parte integrante do Gerenciamento de Riscos Ocupacionais (GRO) e substitui o antigo PPRA desde janeiro de 2022. É aplicável a todas as empresas com empregados regidos pela CLT, independentemente do porte ou ramo de atividade.</p>

                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Search className='w-5 h-5 xl:w-7 xl:h-7' />  O que deve conter o PGR?
                    </h2>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'>•	Inventário de riscos ocupacionais (físicos, químicos, biológicos, ergonômicos e de acidentes);</li>
                        <li>•	Avaliação de riscos por função e ambiente;</li>
                        <li>•	Plano de ação com medidas de prevenção e controle;</li>
                        <li>•	Cronograma de revisões e atualizações;</li>
                        <li>•	Articulação com os demais documentos de SST (PCMSO, LTCAT, etc.).</li>
                    </ul>
                    <p className='mt-2'>O PGR deve ser elaborado por profissional qualificado em SST, com atualização sempre que houver mudanças no ambiente de trabalho ou processos produtivos.</p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><CalendarClockIcon className='w-5 h-5 xl:w-7 xl:h-7' /> Periodicidade e guarda
                    </h2>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Atualização sempre que houver alterações significativas;</li>
                        <li>•	Guarda obrigatória por no mínimo 20 anos.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Megaphone className='w-5 h-5 xl:w-7 xl:h-7' /> E se a empresa não tiver PGR?
                    </h2>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Multas e autuações pela fiscalização do trabalho;</li>
                        <li>•	Riscos de acidentes e doenças ocupacionais;</li>
                        <li>•	Responsabilização civil e criminal por negligência;</li>
                        <li>•	Aumento de passivos trabalhistas e dificuldades com seguros.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><BriefcaseBusiness className='w-5 h-5 xl:w-7 xl:h-7' /> Elaboração completa e personalizada do seu PGR
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>
                        Atendemos comércios, escritórios, indústrias, galpões e diversas outras atividades, oferecendo suporte técnico especializado em Minas Gerais.
                    </p>
                    <p className='text-md mt-2 text-neutral-600 font-light'>
                        👉 Solicite uma avaliação técnica personalizada e garanta a conformidade ambiental da sua empresa.
                    </p>
                </div>
               
                <a href="https://wa.me/5531p83320618?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!" target='_blank' className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
