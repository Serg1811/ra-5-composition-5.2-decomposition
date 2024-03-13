import News from './components/News';
import Promo from './components/Promo';
import Search from './components/Search';
import Banner from './components/Banner';
import Widgets from './components/Widgets';

/**
 * Собирает страницу
 */
function App() {
    return (
        <>
            <News />
            <Promo />
            <Search />
            <Banner />
            <Widgets />
        </>
    );
}

export default App;
