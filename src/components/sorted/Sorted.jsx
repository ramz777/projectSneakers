import { useState } from 'react';
import s from './sorted.module.scss'

const Sorted = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const list = ['популярности', 'цене', 'алфавиту'];

    const openModal = (i) => {
        setActiveIndex(i);
        setOpen(false)
    }

    return(
        <div className={s.sorted}>
            <div className={s.title}>Сортировка по: <span onClick={() => setOpen(!open)}>{list[activeIndex]}</span></div>
            {open && (<div className={s.sortedList}>
                {
                    list.map((item, i) => {
                        return <div onClick={() => openModal(i)} className={activeIndex === i? `${s.sortedListItem} ${s.active}`: `${s.sortedListItem}` }>{item}</div>
                    })
                }
               
            </div>)}
        </div>
    )
}

export default Sorted;