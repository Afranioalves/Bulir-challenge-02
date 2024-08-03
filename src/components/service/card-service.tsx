import { useState } from 'react'
import styles from './style.module.css'
import { currency } from '@/libs/currency-format'
import service from '@/actions/service'
import { toastError, toastSuccess } from '@/utils/toaster'

const CardService = ({title, description, category, price, provider, date, showButton, avatar, action}:
    {action:Function, avatar:string,showButton?:boolean, date:string, title:string, description:string, provider:string, category:string, price:string}) =>{
    
    const [isSubmitted, setSubmitted] = useState<boolean>(false)


    
    return(
        <div className={styles.card_service}>
            <div className={styles.box_icon}>
                <img src={avatar} alt="icon" className={styles.icon}/>
                <div>
                    <h2 className={styles.service_name}>{title}</h2>
                    <p className={styles.provider_name}><span>Por:</span> {provider}</p>
                </div>
            </div>
            <div className={styles.box_more_info}>
                <p className={styles.category}>{category}</p>
                <p className={styles.price}>{currency.format(+price)}</p>
            </div>

            <p className={styles.description}>{description}</p>

            <p className={styles.date}>Disponivel deste : <span>{date}</span></p>
            {showButton && <button className={styles.button_contract} onClick={()=>action()}>Contratar</button>}
        
        </div>
    )
}

export default CardService