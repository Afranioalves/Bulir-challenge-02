import Metadata from '@/components/metadata'
import styles from './style.module.css'
import SideMenu from '@/components/side-menu'
import Input from '@/components/input'
import Infomartion from '@/components/profile/information'
import Service from '@/components/profile/service-section'
import CreateService from '@/components/profile/service-section/create-service'
import { ToastContainer } from 'react-toastify'
import { getCookie } from 'cookies-next'
import { useState } from 'react'
import service from '@/actions/service'


const ServiceProfile =({user, services}:{user:Object, services:Array<object>}) =>{
        const [index, setIndex] = useState<number>(0)
    return(
        <main className={styles.container}>
            <Metadata title='Meus Serviços'/>
            <ToastContainer />
            <section className={styles.content}>
            <SideMenu router='Service' user={user}/>
            <div className={styles.section}>
                {index == 0 && <Service changeIndex={()=>setIndex(1)} data={services}/>}
                {index == 1 && <CreateService changeIndex={()=>setIndex(0)} user={user}/>}
            </div>
            </section>
           
        </main>
    )
}

export default ServiceProfile

export async function getServerSideProps<GetServerSideProps>(context:any){
    const user:any = getCookie('INFO', context)
    const token:any = getCookie('TOKEN', context)
    const {data, error, code} = await service.findAllMyServices(token)
   
    const info = JSON.parse(user);
    if(info.userType != "PRESTADOR"){
        return{
            redirect:{
                 destination: '/home/profile',
                 permanent: false,
            }
         }
    }
    return{
        props:{
           user: JSON.parse(user),
           services:data.services
        }
    }
    

}