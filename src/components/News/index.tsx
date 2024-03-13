import NewsTabs from './NewsTabs';
import NewsList from './NewsList';
import Stocks from './Stocks';
import { newsTabs, date, news, stocks } from '../data/data';

/**
 * Виджет топ новостей. Выводит табы NewsTabs, список новостей NewsList и биржевую сводку Stocks
 */
function News() {
    return (
        <div className="News">
            <NewsTabs newsTabs={newsTabs} date={date} />
            <NewsList news={news} />
            <Stocks stocks={stocks} />
        </div>
    );
}

export default News;
