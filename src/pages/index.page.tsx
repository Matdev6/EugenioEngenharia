import { Helmet } from 'react-helmet-async'
import Slider from '../components/Slider';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';


export { Page }; // Vike espera uma exportação nomeada 'Page'

function Page() {
	return (
		<>
			{/* Meta tags específicas para a sua Landing Page */}
			<Helmet>
				<title>Eugênio Engenharia | Soluções Completas em Engenharia.</title>
				<meta name="description" content="Eugênio Engenharia oferece as melhores soluções em engenharia civil, projetos arquitetônicos, consultoria e gestão de obras. Qualidade e inovação para seu projeto." />
				<link rel="canonical" href="https://seusite.com.br/" />
				{/* Open Graph e Twitter Cards para a Landing Page */}
				<meta property="og:title" content="Eugênio Engenharia" />
				<meta property="og:description" content="Soluções completas em engenharia civil e projetos." />
				<meta property="og:image" content="https://seusite.com.br/imagens/eugenio-engenharia-logo.jpg" />
				<meta property="og:url" content="https://seusite.com.br/" />
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>
			
			<Header />
			<Slider />
			<About />
			<Services />
			<Clients />
			<Blog />
			<Contact />
			<Footer />
		</>
	);
}