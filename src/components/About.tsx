
import about from "../assets/about.jpg"

export default function About() {
    return (
        <section className="flex flex-col items-center justify-center xl:min-h-[90vh] min-h-[80vh] bg-b">
            <div className="xl:w-[60%]   w-11/12 mb-4 ">
                <div className="flex flex-col">
                    <h1 className="xl:text-5xl text-3xl font-light xl:mb-10 mb-6">Construindo um Futuro com Segurança</h1>
                    <div className="flex flex-col xl:flex-row gap-8">
                        <img src={about} alt="" className="w-192" />
                        <div className="flex flex-col justify-between">
                            <p className="text-neutral-600 font-light pb-8 border-b">Trabalhamos para garantir ambientes de trabalho seguros e eficientes. Atuamos com foco em prevenção de riscos, atendimento às normas e proteção de vidas em cada projeto.
                            </p>
                            
                            <button className="py-3 border  text-sm hover:bg-black hover:text-white transition-all duration-300 cursor-pointe mt-6 cursor-pointer">Agendar Avaliação Técnica</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
} 