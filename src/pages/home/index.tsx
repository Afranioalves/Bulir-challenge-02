import styles from './style.module.css'
import Metadata from '@/components/metadata'
import Heading from '@/components/heading'
import Category from '@/components/category'
import Service from '@/components/service'
import Provider from '@/components/provider'

const Home = () =>{
    return(
        <>
        <Metadata title='Offices'/>
             <main>
               <Heading />
               <Category />
               <Service />
               <Provider />
            </main>
        </>
       
    )
}

export default Home