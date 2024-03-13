/**
 * Вывод списка новостей
 */

interface Props {
    news: {
        id: number;
        link: string;
        name: string;
        title: string;
        icon: string;
        sourceName: string;
    }[]
}
const NewsList = ({ news }: Props) => {
    return (
        <div className="topnews-list">
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <a href={item.link}>
                            <img src={item.icon} alt={item.sourceName} />
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsList;
