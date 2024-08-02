import styles from './style.module.css'

const CardTestimony = ({name, address, avatar}:{name:string, address:string, avatar:string}) =>{

    return(
        <div className={styles.card}>
            <div className={styles.box_avatar}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
                <div className={styles.box_info}>
                    <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.address}>{address}</p>
                    </div>
                    <p className={styles.quotes}><i className='bx bxs-quote-alt-right'></i></p>
                   
                </div>
            </div>
            <p className={styles.comment}>
                Lorem ipsum dolor sit amet consectetur blanditiis, reiciendis molestias voluptates unde minus corrupti autem nesciunt expedita repellat perferendis neque nisi sapiente soluta. Commodi, omnis recusandae.
            </p>
        </div>
    )
}

export default CardTestimony