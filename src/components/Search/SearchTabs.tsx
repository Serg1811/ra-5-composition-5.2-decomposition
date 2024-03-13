/**
 * Выводит табы над строкой поиска
 */

interface Props {
    searchTabs: {
        id: number;
        link: string;
        title: string;
    }[]
}

const SearchTabs = ({ searchTabs }: Props) => {
    return (
        <div className="tabs">
            <ul>
                {searchTabs.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} title={item.title}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchTabs;
