/**
 * Выводит логотип перед строкой поиска
 */

interface Props {
    logo: {
        img: string;
        link: string;
        title: string;
    }
}

const Logo = ({ logo }: Props) => {
    return (
        <div className="logo">
            <a href={logo.link} title={logo.title}>
                <img src={logo.img} alt={logo.title} />
            </a>
        </div>
    );
}

export default Logo;
