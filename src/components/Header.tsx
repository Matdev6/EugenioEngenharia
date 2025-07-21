import { useEffect, useState, type ReactNode } from "react";
import { Contact, Hammer, Home, Menu, Notebook } from "lucide-react";
import { motion } from "motion/react";
import logo from "../assets/logoHeader.png";

export default function Header() {
	type NavItems = {
		label: string;
		link: string;
		icon: ReactNode;
		id: string;
	};

	const navs: NavItems[] = [
		{ label: "Início", link: "#inicio", icon: <Home className="w-6 h-6 text-yellow-500" />, id: "inicio" },
		{ label: "Quem Somos", link: "#quem-somos", icon: <Hammer className="w-6 h-6 text-yellow-500" />, id: "quem-somos" },
		{ label: "Serviços", link: "#servicos", icon: <Notebook className="w-6 h-6 text-yellow-500" />, id: "servicos" },
		{ label: "Clientes", link: "#clientes", icon: <Notebook className="w-6 h-6 text-yellow-500" />, id: "clientes" },
		{ label: "Blog", link: "#blog", icon: <Notebook className="w-6 h-6 text-yellow-500" />, id: "blog" },
		{ label: "Contato", link: "#contato", icon: <Contact className="w-6 h-6 text-yellow-500" />, id: "contato" },
	];

	const [openNav, setOpenNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			const offset = 80;
			const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({ top, behavior: "smooth" });
		}
		setOpenNav(false);
	};

	return (
		<header className={`h-20 flex items-center justify-evenly fixed w-screen z-20 top-0 transition-all duration-300 ${scrolled ? "bg-[#dbdbdb] shadow-md" : "bg-[#C0CBD4]"}`}>
			<a className="flex items-center gap-2" href="/">
				<img src={logo} alt="Logo Eugênio Engenharia" className="h-16 mt-1" />
				<h1 className="text-xl text-neutral-700">Eugênio Engenharia</h1>
			</a>

			<nav className="md:flex gap-8 text-md font-semibold nav hidden">
				{navs.map((item) => (
					<a
						key={item.label}
						href={item.link}
						className="text-neutral-8010 hover:text-yellow-500 cursor-pointer hover:scale-105 transition-all duration-200 hover:border-b"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection(item.id);
						}}
					>
						{item.label}
					</a>
				))}
			</nav>

			<Menu className="flex md:hidden w-7 h-7" onClick={() => setOpenNav(true)} />

			{openNav && (
				<div className="fixed md:hidden h-screen top-0 w-screen flex flex-row-reverse bg-neutral-950/50 z-10" onClick={() => setOpenNav(false)}>
					<motion.div
						initial={{ x: 300 }}
						animate={{ x: 0 }}
						exit={{ x: 200 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						className="relative h-screen bg-neutral-700 w-2/3 top-0 z-20"
						onClick={(e) => e.stopPropagation()}
					>
						<nav className="flex flex-col p-8 gap-10">
							{navs.map((item) => (
								<a
									key={item.label}
									href={item.link}
									className="flex gap-3 text-lg items-center text-neutral-400 cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.id);
									}}
								>
									{item.icon} {item.label}
								</a>
							))}
						</nav>
					</motion.div>
				</div>
			)}
		</header>
	);
}
