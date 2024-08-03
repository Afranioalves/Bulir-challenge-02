import styles from './style.module.css'

const Download = () =>{
    return(
        <main className={styles.main}>
        <section className={styles.container}>
            <img src="/images/phone.svg" alt="" />
            <div>
                <h1 className={styles.title}>Baixe nosso aplicativo mobile</h1>
                <p className={styles.description}>Pesquise milhares de serviços e encontre o que precures, basta <br /> filtrar na categoria certa</p>
                <p className={styles.check}><i className='bx bx-check-circle'></i>Salve serviços e pesquisas</p>
                <p className={styles.check}><i className='bx bx-check-circle'></i>Contrate um serviço directamente</p>
                <p className={styles.check}><i className='bx bx-check-circle'></i>Carrega a sua carteira digital</p>

                <div className={styles.box_image}>
                    <img src="/images/ios.svg" alt="app store icon"  className={styles.icon}/>
                    <img src="/images/play.svg" alt="app store icon" className={styles.icon}/>
                </div>
            </div>
        </section>
        </main>
    )
}

export default Download