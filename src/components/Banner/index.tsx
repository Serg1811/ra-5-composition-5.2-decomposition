import { banner } from '../data/data';

/**
 * Выводит баннер
 */
const Banner = () =>  {
    return (
        <div className="banner">
            <a href={banner.link} title={banner.title}>
                <img src={banner.img} alt={banner.title} />
            </a>
        </div>
    );
}

export default Banner;
