import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>PRECEND – Entenda o Procedimento da COPASA para Controle de Efluentes Não Domésticos</title>
                <meta name="description" content="Empresas que geram efluentes industriais ou comerciais precisam estar atentas às exigências da COPASA quanto ao seu descarte. Um desses mecanismos de controle é o PRECEND – Procedimento de Controle de Efluentes Não Domésticos, que visa garantir que os resíduos líquidos lançados nas redes públicas de esgoto não prejudiquem o sistema de tratamento nem o meio ambiente." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'>O que é o PRECEND da COPASA?</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'>O PRECEND é um programa da <strong className='font-semibold'>Companhia de Saneamento de Minas Gerais (COPASA)</strong> que regulamenta o lançamento de efluentes não domésticos (como óleos, graxas, solventes, resíduos químicos e gorduras) nas redes coletoras de esgoto.</p>
                    <p className='text-md mt-5 text-neutral-800 font-semibold'>Ele se aplica a atividades que geram esgoto com características diferentes do esgoto sanitário residencial. Alguns exemplos de estabelecimentos obrigados a se adequar ao PRECEND são:</p>

                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'>•	Postos de combustíveis e lava-jatos</li>
                        <li className='text-neutral-950'>•	Oficinas mecânicas e funilarias</li>
                        <li className='text-neutral-950'>•	Indústrias de pequeno e médio porte</li>
                        <li className='text-neutral-950'>•	Restaurantes, lanchonetes e cozinhas industriais</li>
                        <li className='text-neutral-950'>•	Laboratórios, clínicas e hospitais</li>
                        <li className='text-neutral-950'>•	Empresas de galvanoplastia, tinturarias, entre outros</li>
                    </ul>


                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Por que o PRECEND é importante?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>O lançamento irregular de efluentes na rede pública pode causar:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'>•	Danos às tubulações e estações de tratamento</li>
                        <li className='text-neutral-950'>•	Riscos à saúde pública</li>
                        <li className='text-neutral-950'>•	Contaminação do solo e da água</li>
                        <li className='text-neutral-950'>•	Prejuízos ambientais e econômicos</li>
                    </ul>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Por isso, o PRECEND exige que os estabelecimentos realizem o <strong className='font-semibold'>pré-tratamento dos seus efluentes</strong> antes de lançá-los na rede, garantindo que estejam dentro dos padrões aceitáveis definidos pela COPASA.</p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Quais são as obrigações da empresa?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>As principais etapas do processo de regularização no PRECEND incluem:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>1.	<strong className='font-semibold'>Cadastro da atividade</strong> junto à COPASA;</li>
                        <li>2.	<strong className='font-semibold'>Elaboração de projeto técnico</strong> com o sistema de pré-tratamento adequado ( quando necessário);</li>
                        <li>3.	<strong className='font-semibold'>Instalação de dispositivos</strong> como caixas separadoras de água e óleo, caixas de gordura, filtros e tanques de contenção, conforme o caso;</li>
                        <li>4.	<strong className='font-semibold'>Acompanhamento técnico</strong> durante a implantação do sistema;</li>
                        <li className='font-semibold'>5.	Solicitação da Autorização de Lançamento de Efluentes Não Domésticos ;</li>
                        <li>6.	Em alguns casos, <strong className='font-semibold'>monitoramento contínuo</strong> com envio de laudos laboratoriais.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 '>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Quais as consequências da não regularização?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Empresas que não se regularizam junto ao PRECEND podem ser notificadas e sofrer sanções como:</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Aplicação de multas;</li>
                        <li>•	Suspensão da coleta de esgoto pela COPASA;</li>
                        <li>•	Dificuldades na obtenção de alvarás e licenciamento ambiental;</li>
                        <li>•	Complicações em fiscalizações da vigilância sanitária, órgãos ambientais e Ministério Público.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 '>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Como podemos ajudar a sua empresa?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Somos especializados em engenharia ambiental e segurança do trabalho, com foco em regularização de empresas junto à COPASA e órgãos ambientais. Oferecemos:</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Elaboração de projetos técnicos completos;</li>
                        <li>•	Acompanhamento do processo junto à COPASA;</li>
                        <li>•	Emissão de ART;</li>
                        <li>•	Orientações práticas para adequação da empresa e dos sistemas de pré-tratamento;</li>
                        <li>•	Suporte contínuo até a obtenção da <strong className='font-semibold'>Autorização de Lançamento de Efluentes Não Domésticos.</strong></li>
                    </ul>
                    <p className='text-md mt-6 text-neutral-800 font-semibold'>Precisa se regularizar no PRECEND? Fale conosco.</p>
                    <p className='text-md mt-2 text-neutral-600 font-light'>Oferecemos atendimento personalizado para empresas de diferentes setores e portes, com soluções sob medida para garantir a conformidade legal e a segurança ambiental da sua atividade.</p>
                    <span className='text-md mt-2 text-neutral-600 font-semibold'>
                        📩 Entre em contato agora para uma avaliação gratuita.
                    </span>
                </div>
                <a href="+55 31 8332-0618" className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
