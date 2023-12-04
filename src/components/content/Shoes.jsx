import { useState } from 'react';
import s from './content.module.scss';


const Shoes = ({ id, imgShoes, nameShoes, priceShoes, sizes }) => {



    const [countShoes, setCountShoes] = useState(0);

    const addShoes = () => {
        setCountShoes(countShoes + 1)
    }


    const [activeIndex, setActiveIndex] = useState(0)


    return (
        <div className={s.shoes}>
            <div className={s.photo}>
                <img className={s.img} src={imgShoes} alt="" />
            </div>

            <div className={s.name}>{nameShoes}</div>
            <div className={s.params}>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
            </div>
            <div className={s.size}>
                {
                    sizes.map((size, i) => {
                        return <div key={size} onClick={() => setActiveIndex(i)} className={activeIndex === i? s.active: ''}>{size}</div>
                    })
                }
            </div>
            <div className={s.price}> <span> {priceShoes} </span><div onClick={addShoes}>+ добавить <div>{countShoes}</div></div></div>

        </div>
    )
}

export default Shoes;