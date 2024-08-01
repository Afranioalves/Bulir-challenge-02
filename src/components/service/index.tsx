import Link from 'next/link'
import styles from './style.module.css'
import CardService from './card-service'

const Service = () =>{
    return(
        <section className={styles.container}>
             <h1 className={styles.title}>Serviços recentes</h1>
                <div className={styles.box_description}>
                    <p>Mais de 20 serviços Disponiveis, para sí</p>
                    <Link href="#" className={styles.link_more}>Ver todas os serviços</Link>
                </div>

                <div className={styles.cotent_services}>
                        <CardService />
                        <CardService />
                        <CardService />
                        <CardService />
                        <CardService />
                        <CardService />
                        <CardService />
                        <CardService />
                        <CardService />
                        
                </div>
        </section>
    )
}

export default Service