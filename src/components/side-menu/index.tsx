import Link from 'next/link'
import styles from './style.module.css'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const SideMenu = ({router, user}:{router:string, user:any}) =>{


     const route = useRouter()
    const logout = () =>{
        deleteCookie('TOKEN')
        deleteCookie('INFO')
        route.push('/')
    }
    return(
        <div className={styles.container}>
            <Link href="/home"><img src="/logo.svg" alt="logo" className={styles.logo}/></Link>
            <ul className={styles.links}>
                <li className={router == 'Profile' ? styles.selected : ''} ><Link href="/home/profile"><i className='bx bx-grid-alt'></i>Dashboard</Link></li>
                {user.userType == 'PRESTADOR' && <li className={router == 'Service' ? styles.selected : ''}><Link href="/home/profile/service"><i className='bx bx-package'></i>Meus serviços</Link></li>}
                <li className={router == 'Historic' ? styles.selected : ''}><Link href="#"><i className='bx bx-timer' ></i>Histórico</Link></li>
                <li className={styles.button_logout} onClick={()=>logout()}><i className='bx bx-log-out'></i>Logout</li>
            </ul>
        </div>
    )
}

export default SideMenu