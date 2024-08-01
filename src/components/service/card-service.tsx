import styles from './style.module.css'

const CardService = () =>{
    return(
        <div className={styles.card_service}>
            <div className={styles.box_icon}>
                <img src="/icon/developer.svg" alt="icon" className={styles.icon}/>
                <div>
                    <h2 className={styles.service_name}>Front-end Developer</h2>
                    <p className={styles.provider_name}><span>Por:</span> Afrânio Fernando</p>
                </div>
            </div>
            <div className={styles.box_more_info}>
                <p className={styles.category}>Tecnologia</p>
                <p className={styles.price}>kz 4.500,00</p>
            </div>

            <p className={styles.date}>Disponivel deste : <span>20, Jun 2024</span></p>
        </div>
    )
}

export default CardService