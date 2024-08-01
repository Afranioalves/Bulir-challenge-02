import styles from './style.module.css'
import CardProvider from './card-provider'

const Provider = () =>{
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Provedores de Serviços</h1>
                <div className={styles.box_description}>
                    <p>Mais de 20 Provedores compententes, registados na plataforma</p>
                </div>

                <div className={styles.providers}>
                    <CardProvider />
                    <CardProvider />
                    <CardProvider />
                </div>
        </section>
    )
}

export default Provider