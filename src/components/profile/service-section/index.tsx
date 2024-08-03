import { currency } from '@/libs/currency-format'
import styles from './style.module.css'
import service from '@/actions/service'
import { toastError, toastSuccess } from '@/utils/toaster'
import { useRouter } from 'next/router'

const Service = ({changeIndex, data}:{changeIndex:Function, data:Array<any>}) =>{

    const router = useRouter();
    const refreshData = () => router.replace(router.asPath);

    const handlerSubmit = async(serviceId:string)=>{
  
        const {data, error, code} = await service.disableEnableService(serviceId)
           if(code == 200){
            refreshData();
            return toastSuccess(data.message)
           }
            toastError(data.message.toUpperCase())
    }

    const renderService = () => {
        return data.map((service, index) => {
            return <tr key={index}>
                <td>{service.title}</td>
                <td>{currency.format(+service.price)}</td>
                <td>{service.status == "ACTIVADO" ? <span className={styles.enable}>Disponivel</span> : <span className={styles.disable}>Indisponivel</span>}</td>
                <td>{service.description.length > 40 ? `${service.description.substring(0,40)}...`: service.description}</td>
                <td style={{display:'flex', gap:12, justifyContent:'flex-end'}}>
                    <button className={styles.button_edit}><i className='bx bx-edit'></i></button>
                    { service.status == "ACTIVADO" && <button className={styles.button_block} title='Desactivar' onClick={()=>handlerSubmit(service.id)}><i className='bx bx-block'></i></button>}
                    {service.status != "ACTIVADO" && <button className={styles.button_enable} title='Activar' onClick={()=>handlerSubmit(service.id)}><i className='bx bx-check'></i></button>}
                </td>
            </tr>
        })
    }
    return(
        <section className={styles.content_service}>
            <header className={styles.header}>
                <h1 className={styles.title}>Lista de Serviços</h1>
                <button className={styles.button_add} onClick={()=>changeIndex()}><i className='bx bx-plus'></i>Adicionar</button>
            </header>
    <table className={styles.table}>
        <thead>
            <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Estado</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            {renderService()}
        </tbody>
    </table>
        </section>
    )
}

export default Service