import styles from './style.module.css'

const Section = ({description, title, image, buttonText}:{description:string, title:string, image:string, buttonText:string}) =>{
    return(
        <div className={styles.section}>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
                <button className={styles.button}>{buttonText}</button>
            </div>
            <img src={`/images/${image}`}/>
        </div>
    )
}

const Category = () =>{
    return(
        <section className={styles.container}>
            <div className={styles.content_section}>
                <Section
                    title='Para Cliente'
                    image='costumer.svg'
                    buttonText='Ver Serviços'
                    description='Encontre serviços de qualidade que tanto procures, preços acessiveis e prestadores compententes'
                />
                 <Section
                    title='Para Provedores'
                    image='provider.svg'
                    buttonText='Criar Serviços'
                    description='Disponiblize os seus serviços cadastrando-lhes na plataforma, dê o preço,e começa a ganhar'
                />
            </div>
            
        </section>
    )
}

export default Category