import styles from './style.module.css'

const About = () =>{
    return(
        <section className={styles.container}>
                <div>
                    <h1 className={styles.title}>Encontre um serviço usando o <span>Offices</span><br />
                     em 3 passos fáceis</h1>
                     <p className={styles.description}>Sabemos que encontrar um serviço, com um prestador competente não é facil, mas o offices, torna isso mais facil do que nunca </p>
                    <p className={styles.step}><i className='bx bx-search'></i>Pesquise de onde você estiver</p>
                    <p className={styles.step}><i className='bx bx-filter-alt'></i>Escolha e filtre uma lista de categoria</p>
                    <p className={styles.step}><i className='bx bx-file'></i>Analise os detalhes do serviço e contrata-o</p>
                </div>
                <img src='/images/search.svg' alt='search image' className={styles.image}/>
        </section>
    )
}

export default About