import Shoes from './Shoes';
import s from './content.module.scss';
import blazermid from '../../images/blazermid.png'
import jordan from '../../images/jordan.png'
import yzy from '../../images/yzy.png'


const Content = () => {

    

    const shoes = [
        {
            imgShoes: blazermid,
            nameShoes: "Мужские кроссовки Nike Blazer Mid '77 Vintage",
            priceShoes: '18 499₽',
            sizes: [40, 41, 42, 43, 44, 45]
        },
        {
            imgShoes:jordan,
            nameShoes:"Мужские кроссовки Nike Air Jordan 1 Mid Chicago Toe",
            priceShoes:'18 600₽',
            sizes: [40, 41, 42, 43, 44, 45]
        },
        {
            imgShoes:'https://flomaster.club/uploads/posts/2023-01/1673385572_flomaster-club-p-risunok-krossovok-adidas-instagram-46.png',
            nameShoes:'Мужские кроссовки adidas Campus Low Trainer Shoes',
            priceShoes:'20 500₽',
            sizes: [40, 41, 42, 43, 44, 45]
        },
        {
            imgShoes:yzy, 
            nameShoes:"Кроссовки Adidas Yeezy Boost 350 V2 Black Red",
            priceShoes:'22 900₽',
            sizes: [40, 41, 42, 43, 44, 45]
        }
    ]

    return(
        <div className={s.content}>
            {
                shoes.map(item => {
                    return <Shoes {...item} />
                })
            }
        </div>
    )
}

export default Content