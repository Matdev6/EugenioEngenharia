import { Contact, Hammer, Home, Menu, Notebook } from "lucide-react"
import { useState, type ReactNode } from "react"
import { motion } from "motion/react"


export default function Header() {

    type NavItems = {
        label: string,
        link: string,
        icon: ReactNode
    }

    const navs: NavItems[] = [
        { label: "Início", link: "#", icon: <Home className="w-6 h-6" /> },
        { label: "Sobre nós", link: "#", icon: <Notebook className="w-6 h-6" /> },
        { label: "Serviços", link: "#", icon: <Hammer className="w-6 h-6" /> },
        { label: "Contato", link: "#", icon: <Contact className="w-6 h-6" /> },
    ]

    const [openNav, setOpenNav] = useState(false)

    return (
        <header className="h-20 bg-neutral-50 flex items-center justify-evenly">

            <h1 className="text-xl ">Eugênio Engenharia</h1>

            <nav className="md:flex gap-8 text-md  font-semibold nav hidden">
                {navs.map((item) => <a className="text-neutral-800 hover:text-neutral-400 hover:scale-105 transition-all duration-200 hover:border-b" href={item.link} key={item.label}>{item.label}</a>)}
            </nav>

            <Menu className="flex md:hidden w-7 h-7" onClick={() => setOpenNav(true)} />

            {openNav &&
                <div className="fixed md:hidden  h-screen top-0 w-screen flex flex-row-reverse bg-neutral-950/50 z-10" onClick={() => setOpenNav(prev => !prev)} >
                    <motion.div
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: 200 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative h-screen bg-white w-2/3 top-0 z-20" onClick={(e) => e.stopPropagation()}>
                        <nav className="flex flex-col p-8 gap-10">
                            {navs.map((item, index) => <a key={index} className="flex gap-3 text-lg items-center">{item.icon} {item.label}</a>)}
                        </nav>
                    </motion.div>
                </div>}



        </header>
    )
}