import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';
import { AlertTriangle, BriefcaseBusiness, CalendarClockIcon, ChartBarDecreasing, FireExtinguisher, HardHat, LaptopMinimalCheckIcon, Lightbulb, Megaphone, Newspaper, PencilRuler, Phone, ScrollText, Search, Sprout, Timer, Verified, X } from 'lucide-react';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>AVCB – Auto de Vistoria do Corpo de Bombeiros</title>
                <meta name="description" content="O AVCB – Auto de Vistoria do Corpo de Bombeiros é o documento emitido pelo Corpo de Bombeiros Militar de Minas Gerais (CBMMG) que atesta que uma edificação possui as condições mínimas de segurança contra incêndio e pânico, conforme a legislação estadual vigente." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'><FireExtinguisher className='w-6 h-6 xl:w-7 xl:h-7' /> O que é o AVCB e por que sua empresa precisa dele?</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'>O <strong className='font-semibold'>AVCB – Auto de Vistoria do Corpo de Bombeiros</strong> é o documento emitido pelo <strong className='font-semibold'>Corpo de Bombeiros Militar de Minas Gerais (CBMMG)</strong> que atesta que uma edificação possui as <strong className='font-semibold'>condições mínimas de segurança contra incêndio e pânico,</strong> conforme a legislação estadual vigente.</p>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Esse documento é essencial para garantir a segurança das pessoas e do patrimônio, além de ser exigido em diversas situações legais, como licenciamento, funcionamento e regularização de imóveis.</p>

                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><ScrollText className='w-5 h-5 xl:w-7 xl:h-7' /> Quando o AVCB é exigido?
                    </h2>
                    <p className='text-md mt-5 text-neutral-600 font-light'>De acordo com o <strong className='font-semibold'>Decreto Estadual</strong> nº 47.998/2020, que regulamenta o Sistema de Segurança Contra Incêndio e Pânico (SCIP) em Minas Gerais, o AVCB é exigido nos seguintes casos:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className=''>•	<strong className='font-semibold'>Construção, reforma ou ampliação</strong> de edificações (com exceções de edificações unifamiliares residenciais);</li>
                        <li>•	<strong className='font-semibold'>Mudança de ocupação ou uso</strong> do imóvel;</li>
                        <li>•   <strong className='font-semibold'>Regularização de imóveis existentes,</strong> conforme critérios definidos pelas Instruções Técnicas (ITs);</li>
                        <li>•	Para obtenção de <strong className='font-semibold'>licenças e autorizações</strong> junto à prefeitura, órgãos ambientais ou sanitários;</li>
                        <li>•	Para <strong className='font-semibold'>contratação de seguros,</strong> financiamentos ou exigência de terceiros. </li>
                    </ul>
                    <p className='mt-2'>Exemplos: - Indústrias, oficinas, serralherias, lavanderias, postos de combustível, lava-jatos; - Atividades minerárias, agroindustriais, comércio de químicos; - Galpões de triagem, centros de distribuição, entre outros.</p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><HardHat className='w-5 h-5 xl:w-7 xl:h-7' /> O que o Corpo de Bombeiros avalia?
                    </h2>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Durante o processo de análise e vistoria para emissão do AVCB, são avaliadas as medidas de segurança contra incêndio exigidas conforme o tipo e a ocupação da edificação, seguem abaixo exemplos de medidas normalmente requeridas:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li><strong className='font-semibold'>•	Extintores de incêndio e hidrantes;</strong></li>
                        <li><strong className='font-semibold'>•	Sinalização de emergência e iluminação de rota de fuga </strong> (conforme IT 15);</li>
                        <li><strong className='font-semibold'>•	Saídas de emergência e acessibilidade;</strong> </li>
                        <li><strong className='font-semibold'>•	Sistema de alarme e detecção de incêndio, </strong>quando aplicável;</li>
                        <li><strong className='font-semibold'>•	SPDA – Sistema de proteção contra descargas atmosféricas </strong>para edificações com mais de 30 m ou conforme risco);</li>
                    </ul>
                    <p className='mt-2'>As exigências específicas são determinadas conforme as <strong className='font-semibold'>Instruções Técnicas (ITs) </strong>do CBMMG e dependem da <strong className='font-semibold'>área, altura e ocupação da edificação.</strong></p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Timer className='w-5 h-5 xl:w-7 xl:h-7' /> Qual é a validade do AVCB em Minas Gerais??
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>Conforme o artigo 19 do <strong className='font-semibold'>Decreto nº 47.998/2020,</strong> o AVCB possui:</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>o	Reforma ou ampliação da edificação;</li>
                        <li>o	Mudança de ocupação ou uso;</li>
                        <li>o	Alterações nas medidas de segurança.</li>
                    </ul>
                    <p className='text-md mt-4 text-neutral-600 font-light'>A validade <strong className='font-semibold'>não varia por tipo de risco ou atividade,</strong> o que diferencia Minas Gerais de outros estados. Portanto, <strong className='font-semibold'>não existe validade anual</strong> no estado, salvo quando uma nova vistoria for obrigatória por alteração relevante.</p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><AlertTriangle className='w-5 h-5 xl:w-7 xl:h-7' />  E se a empresa não tiver o AVCB?
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>
                        A ausência do AVCB pode acarretar diversas <strong>consequências administrativas e legais:</strong>
                    </p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li><strong className='font-semibold'>•	Multas</strong> aplicadas pelo Corpo de Bombeiros ou prefeitura;</li>
                        <li><strong className='font-semibold'>•	Interdição da atividade comercial;</strong></li>
                        <li><strong className='font-semibold'>•	Problemas na renovação de alvarás e licenças;</strong> </li>
                        <li><strong className='font-semibold'>•	Recusa de cobertura por seguradoras,</strong> em caso de sinistros;</li>
                        <li>•	Risco elevado à segurança dos ocupantes e ao patrimônio.</li>
                    </ul>
                    <p className='text-md mt-2 text-neutral-600 font-light'>
                        O AVCB é frequentemente exigido por órgãos de fiscalização como <strong>prefeituras, vigilância sanitária, Corpo de Bombeiros, meio ambiente e seguros.</strong>
                    </p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 '>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Verified className='w-5 h-5 xl:w-7 xl:h-7' /> Conclusão
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>
                        O AVCB não é apenas uma exigência burocrática — ele é uma <strong>garantia de que a edificação atende às normas mínimas de segurança contra incêndio, </strong>protegendo vidas, patrimônio e evitando prejuízos legais.
                    </p>
                    <p>Se você está:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Abrindo uma empresa;</li>
                        <li>•	Regularizando um imóvel;</li>
                        <li>•	Foi notificado por fiscalização;</li>
                    </ul>
                    <p className='text-md mt-2 text-neutral-600 font-light'>
                        <strong className='font-semibold'>É fundamental providenciar o AVCB com o suporte de um profissional habilitado.</strong>
                    </p>

                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Phone className='w-5 h-5 xl:w-7 xl:h-7' /> Precisa de ajuda para emitir o AVCB da sua empresa?
                    </h2>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Elaboramos projetos técnicos, realizamos adequações físicas e acompanhamos todas as etapas junto ao CBMMG para emissão do seu AVCB com segurança, agilidade e total conformidade.</p>
                </div>

                <a href="+55 31 8332-0618" className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
