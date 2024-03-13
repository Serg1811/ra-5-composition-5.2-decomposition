import { promo } from '../data/data';

/**
 * Промо-блок, выводит изображение, заголовок (является ссылкой) и текст
 */
const Promo = () => {
    return (
        <div className="promo">
            <img src={promo.img} alt={promo.title} />
            <a href={promo.link} title={promo.title}>
                {promo.title}
            </a>
            <p>{promo.text}</p>
        </div>
    );
}

export default Promo;
