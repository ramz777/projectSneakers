import { useState } from 'react';
import s from './categoryes.module.scss';

const Categoryes = () => {

    const categoryes = [
        {id: 1, img: 'https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png'},
        {id: 2, img: 'https://seeklogo.com/images/A/adidas-logo-344EED0709-seeklogo.com.png'},
        {id: 3, img: 'https://seeklogo.com/images/N/new-balance-logo-92A821DDB4-seeklogo.com.png'},
        {id: 4, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/2560px-Reebok_2019_logo.svg.png'},
        {id: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans-logo.svg/2560px-Vans-logo.svg.png'}
    ]

    

    const [activeIndex, setActiveIndex] = useState(0)

    return(
        <ul className={s.categoryes}>
            {categoryes.map((item, i) => {
                return <li key={item.id} onClick={() => setActiveIndex(i)} className={activeIndex === i? `${s.category} ${s.active}`: `${s.category}`}><img src={item.img} alt="" /></li>
            })}
        </ul>
    )
}

export default Categoryes