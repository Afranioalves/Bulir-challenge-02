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

const Home = ({testimony}:{testimony:Array<any>}) =>{

    console.log(testimony)

    return(
        <>
        <Metadata title='Offices'/>
             <main>
               <Heading />
               <Category />
               <Service />
               <Provider />
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

    const {data, error} = await getFakeTestimony()
    return{
        props:{
           testimony: data.results
        }
    }

}