import styles from './style.module.css'

const Section = ({description,action, title, image, buttonText}:{action:Function, description:string, title:string, image:string, buttonText:string}) =>{
    return(
        <div className={styles.section}>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
                <button onClick={()=>action()} className={styles.button}>{buttonText}</button>
            </div>
            <img src={`/images/${image}`} className={styles.imagem_section}/>
        </div>
    )
}

export default Section