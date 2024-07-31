import styles from './style.module.css'
import Metadata from '@/components/metadata'
import Heading from '@/components/heading'
import Category from '@/components/category'

const Home = () =>{
    return(
        <>
        <Metadata title='Offices'/>
             <main>
               <Heading />
               <Category />
            </main>
        </>
       
    )
}

export default Home