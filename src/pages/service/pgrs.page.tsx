import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';
import { ChartBarDecreasing, Newspaper, PencilRuler, Phone, Verified, X } from 'lucide-react';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>PGR - Minas Gerias</title>
                <meta name="description" content="O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é um documento técnico que descreve o conjunto de medidas voltadas para o manejo adequado dos resíduos gerados por uma atividade ou empreendimento, desde a geração até a disposição final ambientalmente adequada." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'><PencilRuler className='w-6 h-6 xl:w-7 xl:h-7'  /> O que é o PGRS e quando sua empresa precisa dele?</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'>O <strong className='font-semibold'>Plano de Gerenciamento de Resíduos Sólidos (PGRS)</strong> é um documento técnico que descreve o conjunto de medidas voltadas para o <strong className='font-semibold'>manejo adequado dos resíduos gerados por uma atividade ou empreendimento,</strong>  desde a geração até a disposição final ambientalmente adequada.</p>
                    <p className='text-md mt-5 text-neutral-600 font-light'>Em <strong className='font-semibold'>Minas Gerais</strong> , o PGRS é regulamentado pela <strong className='font-semibold'>Política Nacional de Resíduos Sólidos (Lei Federal nº 12.305/2010)</strong>, pelo <strong className='font-semibold'> Decreto Federal nº 10.936/2022</strong>, e por legislações estaduais e municipais que determinam sua obrigatoriedade e conteúdo.</p>

                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Newspaper className='w-5 h-5 xl:w-7 xl:h-7'  />  Quem deve apresentar o PGRS?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>A elaboração do PGRS é obrigatória para:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'>• Empresas de <strong className='font-semibold'>construção civil</strong> ;</li>
                        <li>•	Estabelecimentos de <strong className='font-semibold'>saúde</strong> (clínicas, hospitais, laboratórios);</li>
                        <li>•	<strong className='font-semibold'>Indústrias e comércios</strong> que gerem resíduos perigosos ou em grande volume;</li>
                        <li>•	Supermercados, shoppings, oficinas mecânicas, lava-jatos;</li>
                        <li>•	Empreendimentos licenciáveis ambientalmente;</li>
                        <li>•	Conforme definição de cada município (ex: Contagem, Belo Horizonte, Santa Luzia).</li>
                    </ul>
                    <p className='mt-2'>A obrigatoriedade é verificada no momento da emissão de <strong>alvará, licença ambiental, sanitária ou regularização do empreendimento.</strong> </p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><ChartBarDecreasing className='w-5 h-5 xl:w-7 xl:h-7' />  O que deve conter um PGRS?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>O PGRS deve incluir:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Diagnóstico dos resíduos gerados (quantidade, tipo, classe);</li>
                        <li>•	Procedimentos de coleta, armazenamento, transporte e destinação;</li>
                        <li>•	Destinação ambientalmente adequada (aterro, reciclagem, coprocessamento);</li>
                        <li>•	Identificação de empresas terceirizadas (transportadores e destinadores);</li>
                        <li>•	Cronograma de execução e metas;</li>
                        <li>•	Comprovação documental (MTR, contratos, CDF, etc.);</li>
                        <li>•	Responsável técnico com ART (quando exigido).</li>
                    </ul>
                    <p className='mt-2'>O plano deve ser <strong> condizente com a realidade da empresa </strong>e atualizado periodicamente, especialmente em casos de ampliação, mudança de atividade ou renovação de licenças.</p>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><X className='w-5 h-5 xl:w-7 xl:h-7'  />  Riscos de não elaborar o PGRS
                    </h2>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>• <span className='font-semibold'> Multas e autuações</span> por parte da prefeitura, órgãos ambientais ou sanitários;</li>
                        <li>• <span className='font-semibold'>Impedimento para obter licenças</span> de funcionamento</li>
                        <li>•	Responsabilização civil e criminal em caso de dano ambiental;</li>
                        <li>•	Exposição negativa em fiscalizações e processos judiciais.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'><Verified className='w-5 h-5 xl:w-7 xl:h-7'  />  Conclusão
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light'>
                        O PGRS é um instrumento essencial para garantir a <strong className='font-semibold'>responsabilidade ambiental</strong>, a regularidade legal e a <strong className='font-semibold'>imagem positiva</strong> da empresa.
                    </p>
                    <p className='text-md mt-2 text-neutral-600 font-light'>
                        Sua elaboração deve ser feita por profissional habilitado, com experiência na legislação local e nas boas práticas de gerenciamento de resíduos.
                    </p>
                </div>
                <div className='mt-2'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-6 text-2xl font-semibold flex items-center gap-2'><Phone className='w-5 h-5 xl:w-7 xl:h-7'  /> Precisa elaborar ou atualizar seu PGRS?
                    </h2>
                    <p className='text-md mt-4 text-neutral-600 font-light mb-4'>
                        Oferecemos suporte completo na elaboração e atualização do <strong className='font-semibold text-yellow-400'>Plano de Gerenciamento de Resíduos Sólidos (PGRS), </strong> com foco em conformidade legal e eficiência na gestão ambiental da sua empresa.
                    </p>
                    <p className='text-stone-600'>Nossos serviços incluem:</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>• Elaboração do diagnóstico, plano técnico e documentação completa;</li>
                        <li>• Regularização junto aos órgãos públicos competentes;</li>
                        <li>• Acompanhamento técnico e orientação no uso do <strong className='text-yellow-400 font-semibold'>Sistema MTR (SINIR/MG).</strong></li>
                    </ul>
                    <p className='text-md mt-4 text-neutral-600 font-light mb-4'>
                        Atenda à legislação ambiental, evite multas e demonstre compromisso com a gestão correta dos resíduos da sua atividade.
                    </p>
                    <p className='text-md mt-4 text-neutral-600 font-light mb-4'>
                        Entre em contato para agendar uma avaliação técnica.
                    </p>
                   
                </div>
                 <a href="https://wa.me/5531p83320618?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!" target='_blank' className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
