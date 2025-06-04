import { motion } from "motion/react"
import type { ReactNode } from "react"

type ServiceCardItem = {
    img: string,
    title: string,
    descripition: string
}

export default function ServiceCard({ img, title, descripition }: ServiceCardItem): ReactNode {
    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 mb-8">
            <img src={img} alt="" className="rounded-full h-52 w-52 xl:h-56 xl:w-56 object-cover" width={1920} height={1080} />
            <h2 className="text-2xl font-medium text-center">{title}</h2>
            <p className="text-center text-md text-neutral-500 ">{descripition}</p>
            <a href="https://api.whatsapp.com/send/?phone=3194988024&text=Tenho+interesse&type=phone_number&app_absent=0" target="_blank" className=" bg-neutral-950 px-6 py-2.5 mt-4 rounded-4xl text-neutral-50 font-semibold hover:scale-105 hover:bg-neutral-600 transition-all duration-300 cursor-pointer">Tenho interesse</a>
        </motion.div>
    )

}