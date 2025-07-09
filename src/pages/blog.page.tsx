import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

export { Page };

function Page() {
    return (
        <>
            <Helmet>
                <title>Blog | Eugênio Engenharia</title>
                <meta name="description" content="Fique por dentro das novidades, dicas e conteúdos exclusivos da Eugênio Engenharia." />
            </Helmet>

            <Header />
                <Blog />
            <Footer />
        </>
    );
}
