/**
 * Вывод текущей даты
 */

interface Props {
    date: string;
}

const Date = ( { date }: Props) => {
    return <span className="date">{date}</span>;
}

export default Date;
