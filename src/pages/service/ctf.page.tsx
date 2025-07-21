import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>Cadastro Técnico Federal (CTF) — Regularize sua empresa junto ao IBAMA</title>
                <meta name="description" content="O Cadastro Técnico Federal (CTF) é uma exigência do Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA) para empresas e profissionais que exercem atividades com potencial impacto ambiental. Estar cadastrado no CTF é fundamental para garantir a conformidade legal, evitar multas e demonstrar compromisso ambiental." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'>Cadastro Técnico Federal (CTF) — Regularize sua empresa junto ao IBAMA</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'><strong className='font-semibold'>O Cadastro Técnico Federal (CTF)</strong> é uma exigência do <strong className='font-semibold'>Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA)</strong> para empresas e profissionais que exercem atividades com potencial impacto ambiental. Estar cadastrado no CTF é fundamental para garantir a conformidade legal, evitar multas e demonstrar compromisso ambiental.</p>
                    <p className='text-md mt-5 text-neutral-800 font-semibold'>Por que o CTF é importante?</p>

                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'><strong className='font-semibold'>•	Obrigatoriedade legal:</strong>Empresas que manipulam ou geram resíduos e substâncias que podem causar impacto ambiental devem estar cadastradas.</li>
                        <li className='text-neutral-950'><strong className='font-semibold'>•	Transparência e controle</strong>O IBAMA monitora as atividades por meio do CTF, promovendo a proteção do meio ambiente.</li>
                        <li className='text-neutral-950'><strong className='font-semibold'>•	Evite penalidades:</strong> Manter o cadastro atualizado evita multas, embargos e problemas para obter licenças ambientais..</li>
                    </ul>


                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Quem deve se cadastrar?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Estão obrigados a se cadastrar no CTF empresas e profissionais que atuam em setores como:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'>•	Indústrias químicas e petroquímicas</li>
                        <li className='text-neutral-950'>•	Geradores e transportadores de resíduos perigosos</li>
                        <li className='text-neutral-950'>•	Postos de combustíveis</li>
                        <li className='text-neutral-950'>•	Atividades agrícolas com uso de agrotóxicos</li>
                        <li className='text-neutral-950'>•	Outras atividades com potencial impacto ambiental</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Consequências do não cadastramento
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Não possuir o CTF ativo e regularizado pode acarretar:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Multas administrativas pelo IBAMA</li>
                        <li>•	Embargo ou suspensão das atividades da empresa</li>
                        <li>•	Impossibilidade de participar de licitações e contratos públicos</li>
                        <li>•	Dificuldades para obtenção e renovação de licenças ambientais</li>
                        <li>•	Prejuízo à imagem institucional da empresa</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 '>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Como podemos ajudar sua empresa?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Nossa equipe oferece suporte completo para:</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Cadastro e atualização no Sistema CTF/APP do IBAMA</li>
                        <li>•	Orientação sobre obrigações legais e prazos de regularização</li>
                        <li>•	Regularização junto ao IBAMA e demais órgãos ambientais</li>
                        <li>•	Acompanhamento técnico para garantir conformidade e segurança jurídica</li>
                    </ul>
                    <p className='text-md mt-6 text-neutral-800 font-semibold'>Entre em contato e regularize sua empresa hoje mesmo</p>
                    <p className='text-md mt-2 text-neutral-600 font-light'>Garanta a tranquilidade legal e ambiental do seu negócio com um atendimento personalizado e eficiente.</p>
                    <span className='text-md mt-2 text-neutral-600 font-semibold'>
                        📞 Fale conosco para uma avaliação técnica e saiba como proceder.
                    </span>
                </div>
                <a href="+55 31 8332-0618" className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
