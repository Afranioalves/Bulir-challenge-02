import styles from './style.module.css'

const CardProvider = () =>{
    return(
        <div className={styles.card_provider}>
            <div>
                <img src="/icon/developer.svg" alt="icon" />
                <button>Contactar</button>
            </div>
        </div>
    )
}

export default CardProvider