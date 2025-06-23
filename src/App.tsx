import { Analytics } from '@vercel/analytics/react';
import About from "./components/About"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Services from "./components/Services"
import Slider from "./components/Slider"

function App() {

	return (
		<>
			<Header />
			<Slider />
			<About />
			<Services />
			<Clients />
			<Contact />
			<Footer />
			<Analytics />
		</>
	)
}

export default App
