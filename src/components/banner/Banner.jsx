import s from './banner.module.scss';
import topJordan from '../../images/top-jordan.png'

function Banner() {
    return (
        <div className={s.banner}>
            <div className={s.logo}>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png" alt="" />
            </div>
            <div className={s.title}>
                <div className={s.main}>
                    <div>Кроссовки оригинального качества</div>
                    <div className={s.setTitle}>
                        NIKE AIR <br /> JORDAN
                        <div className={s.price}> <s>18 600₽</s> <span>9 999₽</span> </div>
                    </div>
                    <button className={s.btn}>Купить сейчас</button>
                </div>
                <div className={s.img}>
                        <img src={topJordan} alt="" />
                    </div>
            </div>

        </div>
    )
}

export default Banner