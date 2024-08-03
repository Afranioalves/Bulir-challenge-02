import Metadata from '@/components/metadata'
import styles from './style.module.css'
import SideMenu from '@/components/side-menu'
import Input from '@/components/input'
import Infomartion from '@/components/profile/information'
import Service from '@/components/profile/service-section'
import { getCookie } from 'cookies-next'
import hiring from '@/actions/hiring'
import wallet from '@/actions/wallet'
import { ToastContainer } from 'react-toastify'



const Profile =({user, hires, balance}:{user:Object, hires:Array<Object>, balance:string}) =>{
    return(
        <main className={styles.container}>
            <Metadata title='Perfil'/>
            <ToastContainer />
            <section className={styles.content}>
            <SideMenu router='Profile' user={user} />
            <div className={styles.section}>
                <Infomartion user={user} hires={hires} balance={balance}/>
            </div>
            </section>
           
        </main>
    )
}

export default Profile

export async function getServerSideProps<GetServerSideProps>(context:any){
    const user:any = getCookie('INFO', context)
    const token:any = getCookie('TOKEN', context)
    const {data, error, code} = await hiring.findAll(token)
    const walletResult = await wallet.seeBalance(token)
    const {account} = walletResult.data

    return{
        props:{
           user: JSON.parse(user),
           hires:data.content,
           balance:account.balance
        }
    }
    

}