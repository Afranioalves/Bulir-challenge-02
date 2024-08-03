import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { getFirstName } from '@/libs/getname'

const Navbar = ({user}:{user:any}) =>{
    return(
        <nav className={styles.container_nav}>
            <div className={styles.content_link}>
                <Image src='/logo.svg' width={130} height={60} alt='logotipo' />
                <ul className={styles.list_link}>
                    <li className={styles.selected}><Link href="#">Home</Link></li>
                    <li><Link href="#">Serviços</Link></li>
                    <li><Link href="#">Categorias</Link></li>
                </ul>
            </div>

            <div className={styles.user_info}>
                <Link href="/home/profile"><div>
                    <img src="/images/avatar.jpg" alt="user avatar" />
                    <p className={styles.username}>{getFirstName(user.fullName)}</p>
                </div>
                </Link>
                <button>Criar serviço</button>
            </div>
            
        </nav>
    )
}

export default Navbar