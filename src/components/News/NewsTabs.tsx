import Date from './Date';

/**
 * Вывод табов над списком новостей с текущей датой Date
 */

interface Props {
    newsTabs: {
        id: number;
        title: string;
    }[]
    date: string;
}

const NewsTabs = ({ newsTabs, date }: Props) => {
    return (
        <div className="topnews-tabs">
            <ul>
                {newsTabs.map((item) => (
                    <li key={item.id}>
                        <a href="">{item.title}</a>
                    </li>
                ))}
            </ul>
            <Date date={date} />
        </div>
    );
}

export default NewsTabs;
