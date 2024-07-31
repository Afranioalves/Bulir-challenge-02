import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () =>{
    return(
        <nav className={styles.container_nav}>
            <div className={styles.content_link}>
                <Image src='/logo.svg' width={130} height={60} alt='logotipo' />
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Serviços</Link></li>
                    <li><Link href="#">Categorias</Link></li>
                    <li><Link href="#">Histórico</Link></li>
                </ul>
            </div>

            <div>
                <button>Criar serviço</button>
                <button>A</button>
            </div>
            
        </nav>
    )
}

export default Navbar