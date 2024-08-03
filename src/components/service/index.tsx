import Link from 'next/link'
import styles from './style.module.css'
import CardService from './card-service'
import service from '@/actions/service'
import { useState } from 'react'
import { toastError, toastSuccess } from '@/utils/toaster'

const Service = ({data}:{data:Array<any>}) =>{

  const handlerSubmit = async(serviceId:string, providerId:string)=>{
  
    const body = {serviceId, providerId}
    const {data, error, code} = await service.hiring(body)
  
       if(code == 201) return toastSuccess(data.message)
        toastError(data.message.toUpperCase())
}


  const renderService = () =>{
    return data.map((service, index)=>{
      return <CardService 
      key={index}
      showButton={true}
      avatar={`https://randomuser.me/api/portraits/men/${index+1}.jpg`}
          title={service.title.length > 22 ? `${service.title.substring(0,22)}...` :service.title}
          provider={service.provider.providerName}
          price={service.price}
          category={service.category}
          description={service.description}
          action={()=>handlerSubmit(service.id, service.provider.providerId)}
          date={service.createdAt.substring(0,10)}
      />
    })
  }

    return(
        <section className={styles.container}>
             {data.length > 0 && <h1 className={styles.title}>Serviços recentes</h1> }
             {data.length > 0 && <div className={styles.box_description}>
                    <p>Mais de 20 serviços Disponiveis, para sí</p>
                    <Link href="#" className={styles.link_more}>Ver todas os serviços</Link>
                </div> }

                {data.length == 0 && <h1 className={styles.title} style={{textAlign:'center', marginTop:'88px'}}>Serviços indisponiveis</h1>}
                {data.length == 0 && <p style={{textAlign:'center'}}>Estamos sem serviços disponiveis, entre mais tarde</p> }

                <div className={styles.cotent_services}>
            
                {renderService()}

           
                        
                        
                </div>
        </section>
    )
}

export default Service