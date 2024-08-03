import styles from './style.module.css'
import Navbar from '../navbar'

const Heading = ({user}:{user:Object}) =>{
    return(
        <header className={styles.header}>
            <Navbar user={user}/>
            <section className={styles.content}>
                <div className={styles.hiro}>
                    <div>
                        <h1 className={styles.title}>
                            Serviços<br />
                            ideias encontre aqui
                        </h1>
                        <p className={styles.description}>Prestadores, preços baixos e serviços únicos, somente aqui</p>
                        <div className={styles.input_field}>

                        </div>
                        <p className={styles.historic}>Pesquisas populares: <span>Software, Carpinteiro, Jogos</span></p>
                        <div className={styles.content_company}>
                            <p>Com a confiança de marcas e startups líderes</p>
                            <div>
                                <img src='/images/notion.svg'/>
                                <img src='/images/github.svg'/>
                                <img src='/images/square.svg'/>
                            </div>
                        </div>
                    </div>
                    <img src='/images/girl.svg' className={styles.girl_image}/>
                </div>
            </section>
        </header>
    )
}

export default Heading