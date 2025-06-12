
import about from "../assets/about.jpg"

export default function About() {
    return (
        <section className="flex flex-col items-center justify-center xl:min-h-[calc(100vh-80px)] min-h-[80vh] scroll-m-20" id="2">
            <div className="xl:w-[60%]   w-11/12 mb-4 ">
                <div className="flex flex-col">
                    <h1 className="xl:text-5xl text-3xl font-light xl:mb-10 my-6">Sobre nós</h1>
                    <div className="flex flex-col xl:flex-row gap-8">
                        <img src={about} alt="" className="xl:w-2/3 w-full h-max" />
                        <div className="flex flex-col justify-between">
                            <p className="text-neutral-800 font-light xl:text-xl text-md pb-8 border-b">A missão da Eugênio Engenharia é oferecer soluções personalizadas e de qualidade em regularização ambiental, segurança do trabalho, prevenção de incêndios e urbanismo, atuando com transparência, inovação e foco nas necessidades dos clientes para garantir conformidade, segurança e sustentabilidade em cada projeto.
                            </p>
                            
                            <button className="py-3 border bg-yellow-400 text-md font-medium hover:bg-neutral-700 hover:text-white transition-all duration-300 cursor-pointe mt-6 cursor-pointer">Agendar Avaliação Técnica</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
} 