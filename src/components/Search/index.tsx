import Logo from './Logo';
import SearchTabs from './SearchTabs';
import SearchInput from './SearchInput';
import SearchBottom from './SearchBottom';
import { logo, searchTabs, searchExamples } from '../data/data';

/**
 * Блок со сторкой поиска. Выводит логотип, строку поиска, табы над строкой и пример запроса под строкой
 */
const Search = () => {
    return (
        <div className="search-block">
            <Logo logo={logo} />
            <div className="search-line">
                <SearchTabs searchTabs={searchTabs} />
                <SearchInput />
                <SearchBottom searchExamples={searchExamples} />
            </div>
        </div>
    );
}

export default Search;
