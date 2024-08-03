import Link from 'next/link'
import styles from './style.module.css'
import Section from './section'
import Card from './card-category'

const Category = () =>{
    return(
        <section className={styles.full_container}>
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

            <div className={styles.content_cards}>
                <h1>Categorias populares</h1>
                <div className={styles.box_description}>
                    <p>Mais de 20 serviços cadastrados</p>
                    <Link href="#" className={styles.link_more}>Ver todas as categorias</Link>
                </div>

                <div className={styles.cards}>
                    <Card 
                        title='Tecnologias'
                        total={20}
                        description='Serviços relacionadas com tecnologias e o mundo de programação'
                        icon='tecnologia.png'
                    />
                    <Card 
                        title='Saude'
                        total={20}
                        description='Serviços relacionadas com tecnologias e o mundo de programação'
                        icon='saude.png'
                    />
                    <Card 
                        title='Beleza e bem-estar'
                        total={20}
                        description='Serviços relacionadas com tecnologias e o mundo de programação'
                        icon='inventar.png'
                    />
                    <Card 
                        title='Educacional'
                        total={20}
                        description='Serviços relacionadas com tecnologias e o mundo de programação'
                        icon='bacharel.png'
                    />
                </div>
            </div>
            
        </section>
        </section>
    )
}

export default Category