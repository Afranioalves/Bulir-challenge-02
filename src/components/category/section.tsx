import styles from './style.module.css'

const Section = ({description, title, image, buttonText}:{description:string, title:string, image:string, buttonText:string}) =>{
    return(
        <div className={styles.section}>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
                <button className={styles.button}>{buttonText}</button>
            </div>
            <img src={`/images/${image}`} className={styles.imagem_section}/>
        </div>
    )
}

export default Section