import styles from './style.module.css'

const Card = ({description, title, icon, total}:{description:string, title:string, icon:string, total:number}) =>{
    return(
        <div className={styles.card}>
            <img src={`/icon/${icon}`} className={styles.icon}/>
            <div>
                <h2 className={styles.card_title}>{title}</h2>
                <p className={styles.total}>{total} Serviços</p>
                <p className={styles.card_description}>{description}</p>
            </div>
        </div>
    )
}

export default Card