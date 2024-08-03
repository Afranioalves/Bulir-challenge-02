import styles from './style.module.css'

const CardProvider = ({avatar, name}:{avatar:string, name:string}) =>{
    return(
        <div className={styles.card_provider}>
            <div className={styles.box_avatar}>
                <img src={avatar} alt="icon" className={styles.avatar}/>
                <button className={styles.button_contact}>
                    <i className='bx bx-phone'></i>Contactar
                </button>
            </div>

            <div>
                <p className={styles.username}>{name}</p>
                <p className={styles.total}>24 Serviços</p>
                <p className={styles.data}>Registado desde: <span>20 de jun 2024</span></p>
            </div>
        </div>
    )
}

export default CardProvider