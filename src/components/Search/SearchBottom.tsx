/**
 * Выводит пример запроса из массива в случайном порядке
 */

interface Props {
    searchExamples: string[];
}

const SearchBottom = ({ searchExamples }: Props) => {
    const rand = Math.floor(Math.random() * searchExamples.length);

    return (
        <div className="search-bottom">
            <span>Найдётся всё. Например, </span>
            <a href="#">{searchExamples[rand]}</a>
        </div>
    );
}

export default SearchBottom;
