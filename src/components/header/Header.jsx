import classes from './header.module.scss';
import logoBlazer from '../../images/logo2.jpg';
import basket from '../../images/basket.png';


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logoBlazer} alt="" />
                <div className={classes.titles}>
                    <div className={classes.title1}>rShoes</div>
                    <div className={classes.title2}>магазин кроссовок</div>
                </div>
            </div>
            <div className={classes.basket}>
                <div className={classes.price}>500 ₽</div>
                <div>|</div>
                <div className={classes.myBasket}><img src={basket} alt="" /> 3</div>
            </div>
        </div>
    )
}

export default Header;