import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';
import { BriefcaseBusiness, CalendarClockIcon, ChartBarDecreasing, LaptopMinimalCheckIcon, Lightbulb, Megaphone, Newspaper, PencilRuler, Phone, Search, Sprout, Verified, X } from 'lucide-react';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>Licenciamento Ambiental </title>
                <meta name="description" content="O Licenciamento Ambiental é um procedimento administrativo que autoriza e acompanha a implantação e a operação de empreendimentos e atividades que utilizam recursos naturais ou que possam causar impactos ao meio ambiente." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'><Sprout className='w-6 h-6 xl:w-7 xl:h-7' />  O que é o Licenciamento Ambiental e quando ele é exigido?</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'>O <strong className='font-semibold'>Licenciamento Ambiental</strong>é um procedimento administrativo que autoriza e acompanha a implantação e a operação de empreendimentos e atividades que utilizam recursos naturais ou que possam causar impactos ao meio ambiente.</p>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Em <strong className='font-semibold'>Minas Gerais,</strong> o processo é regulamentado pela <strong className='font-semibold'>Lei Estadual nº 21.972/2016, pelo Decreto nº 47.383/2018,</strong> e pelas normas complementares da <strong className='font-semibold'>Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável (SEMAD).</strong></p>

                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Search className='w-5 h-5 xl:w-7 xl:h-7' />  Quem precisa de licenciamento ambiental?
                    </h2>
                    <p className='text-md mt-5 text-neutral-600 font-light'>O licenciamento é exigido para atividades que:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className=''>•	Tenham potencial poluidor ou degradador do meio ambiente;</li>
                        <li>•	Façam uso significativo de recursos naturais;</li>
                        <li>•	Gerem resíduos sólidos, efluentes líquidos ou emissões atmosféricas;</li>
                        <li>•	Enquadrem-se nas listas de atividades licenciáveis publicadas pela SEMAD ou pelo município.</li>
                    </ul>
                    <p className='mt-2'>Exemplos: - Indústrias, oficinas, serralherias, lavanderias, postos de combustível, lava-jatos; - Atividades minerárias, agroindustriais, comércio de químicos; - Galpões de triagem, centros de distribuição, entre outros.</p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><X className='w-5 h-5 xl:w-7 xl:h-7' /> Riscos de funcionar sem licenciamento
                    </h2>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	<strong className='font-semibold'>Multas ambientais</strong> e embargos por fiscalização da SEMAD ou prefeitura;</li>
                        <li className='font-semibold'>•	Suspensão de alvarás e licenças;</li>
                        <li>•	Ações civis públicas por dano ambiental;</li>
                        <li>•	Dificuldade em obter financiamentos, seguros e parcerias comerciais.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Lightbulb className='w-5 h-5 xl:w-7 xl:h-7' /> Por que contratar um profissional?
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>O processo de licenciamento envolve: - Diagnóstico ambiental; - Preenchimento de formulários e cadastro no portal SISEMA/MG; - Elaboração de estudos e documentação técnica (planta, memoriais, ART, etc.); - Acompanhamento de pareceres e atendimento de exigências.</p>
                    <p className='text-md mt-4 text-neutral-600 font-light'>Contar com um engenheiro especialista garante <strong>agilidade, conformidade legal e segurança técnica</strong> durante todo o processo.</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Multas e autuações pela fiscalização do trabalho;</li>
                        <li>•	Riscos de acidentes e doenças ocupacionais;</li>
                        <li>•	Responsabilização civil e criminal por negligência;</li>
                        <li>•	Aumento de passivos trabalhistas e dificuldades com seguros.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Phone className='w-5 h-5 xl:w-7 xl:h-7' />  Precisa regularizar sua empresa ambientalmente?
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>
                        Atuamos com: - Licenciamento municipal e estadual - Elaboração de documentos técnicos e ART; - Atendimento em Minas Gerais, com foco em micro e pequenas empresas.
                    </p>
                    <p className='text-md mt-2 text-neutral-600 font-light'>
                        Fale conosco para saber se sua atividade exige licenciamento e como iniciar o processo com segurança.
                    </p>
                </div>

                <a href="https://wa.me/5531p83320618?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!" target='_blank' className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
