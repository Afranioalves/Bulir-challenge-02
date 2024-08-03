import styles from './style.module.css'
import Metadata from '@/components/metadata'
import Heading from '@/components/heading'
import Category from '@/components/category'
import Service from '@/components/service'
import Provider from '@/components/provider'
import About from '@/components/about'
import Download from '@/components/download'
import Testimony from '@/components/testimony'
import Footer from '@/components/footer'
import { getFakeTestimony } from '@/actions/testimony'
import { getCookie, hasCookie } from 'cookies-next'
import service from '@/actions/service'
import { ToastContainer } from 'react-toastify'


const Home = ({testimony, user, services}:{testimony:Array<any>, user:Object, services:Array<Object>}) =>{
console.log(services)
    return(
        <>
        <Metadata title='Offices'/>
        <ToastContainer />
             <main>
               <Heading user={user}/>
               <Category />
               <Service data={services}/>
               <Provider data={testimony}/>
               <About />
               <Download />
               <Testimony data={testimony}/>
               <Footer />
            </main>
        </>
       
    )
}

export default Home

export async function getServerSideProps<GetServerSideProps>(context:any){
    const token:any = getCookie('TOKEN', context)
    const {data, error} = await getFakeTestimony()
    const services = await service.findAll(token)
    const user:any = getCookie('INFO', context)

    return{
        props:{
           testimony: data.results,
           user: JSON.parse(user),
           services: services.data.content
         
        }
    }
    

}