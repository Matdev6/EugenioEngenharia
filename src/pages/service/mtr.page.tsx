import { Helmet } from 'react-helmet-async';

import Header from '../../components/Header';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>MTR - Manifesto de Transporte de Resíduos</title>
                <meta name="description" content="O Manifesto de Transporte de Resíduos (MTR) é um documento obrigatório que acompanha o transporte dos resíduos gerados pelas empresas, garantindo a rastreabilidade e o controle ambiental do destino final desses materiais." />
            </Helmet>


            <Header />
            <section className='w-11/12 xl:w-[50%] flex flex-col  mx-auto'>
                <div className='mt-24 pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-700 xl:text-4xl mt-2 xl:mt-2 text-xl  font-semibold flex items-center gap-2'>Você sabe a importância do MTR para a sua empresa?</h2>

                    <p className='text-md mt-5 text-neutral-600 font-light'>O Manifesto de Transporte de Resíduos (MTR) é um documento obrigatório que acompanha o transporte dos resíduos gerados pelas empresas, garantindo a rastreabilidade e o controle ambiental do destino final desses materiais.</p>
                    <p className='text-md mt-5 text-neutral-800 font-semibold'>Por que o MTR é fundamental?</p>

                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'><strong className='font-semibold'>•	Exigência legal: </strong> O MTR é exigido pelos órgãos ambientais para comprovar que os resíduos estão sendo transportados e destinados de forma adequada.</li>
                        <li className='text-neutral-950'><strong className='font-semibold'>•	Responsabilidade ambiental:</strong> Ao emitir o MTR corretamente, sua empresa demonstra compromisso com a gestão ambiental e evita multas e sanções.</li>
                        <li className='text-neutral-950'><strong className='font-semibold'>•	Controle e transparência:</strong> O documento permite o acompanhamento desde a geração até o destino final do resíduo, promovendo maior segurança e organização.</li>
                    </ul>

                 
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Quem deve emitir o MTR?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Empresas de todos os setores que geram resíduos sólidos industriais, comerciais ou de serviços, como:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li className='text-neutral-950'>•	Indústrias e fábricas</li>
                        <li className='text-neutral-950'>•	Comércios e estabelecimentos comerciais</li>
                        <li className='text-neutral-950'>•	Construção civil</li>
                        <li className='text-neutral-950'>•	Serviços de saúde, laboratórios e clínicas</li>
                        <li className='text-neutral-950'>•	Galpões de armazenamento e logística</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 border-b-2 border-b-yellow-400'>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Quais são as penalidades pelo não cumprimento?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>O não cumprimento das obrigações relacionadas ao MTR pode resultar em:</p>
                    <ul className='mt-2 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>•	Multas ambientais que variam conforme a gravidade e o porte da empresa;</li>
                        <li>•	Interdição ou embargo das atividades;</li>
                        <li>•	Responsabilização civil e administrativa por danos ambientais;</li>
                        <li>•	Dificuldades na obtenção de licenças e alvarás;</li>
                        <li>•	Possibilidade de ações judiciais e danos à reputação da empresa.</li>
                    </ul>
                </div>
                <div className='mt-4 xl:mt-6 flex flex-col pb-6 xl:pb-8 '>
                    <h2 className='text-neutral-800 xl:text-4xl mt-2 xl:mt-2 text-2xl font-semibold flex items-center gap-2'>Como podemos ajudar sua empresa?
                    </h2>
                    <p className='text-md mt-6 text-neutral-600 font-light'>Oferecemos um serviço completo de gestão do MTR, que inclui:</p>
                    <ul className='mt-4 flex flex-col gap-1 text-md  text-neutral-600 font-light'>
                        <li>✔ Emissão e preenchimento correto do documento conforme normas ambientais;</li>
                        <li>✔ Cadastro e uso do Sistema SINIR/MG;</li>
                        <li>✔ Acompanhamento técnico para garantir conformidade e evitar penalidades;</li>
                        <li>✔ Suporte na regularização junto aos órgãos ambientais.</li>
                    </ul>
                    <p className='text-md mt-6 text-neutral-800 font-semibold'>Estamos à disposição para ajudar sua empresa!</p>
                    <p className='text-md mt-2 text-neutral-600 font-light'>Conte com nossa equipe especializada para garantir a gestão responsável dos seus resíduos e a tranquilidade legal do seu negócio.</p>
                    <span className='text-md mt-2 text-neutral-600 font-semibold'>
                        Entre em contato conosco hoje mesmo e solicite uma avaliação personalizada.
                    </span>
                </div>
                <a href="https://wa.me/5531p83320618?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!" target='_blank' className='xl:w-1/2 mx-auto mt-2 mb-4 flex justify-center p-2 px-3 rounded-xl bg-yellow-400 font-semibold'>Entrar em contato no WhatsApp</a>
            </section>
        </>
    );
}
