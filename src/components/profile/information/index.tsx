import Input from '@/components/input'
import styles from './style.module.css'
import { useState } from 'react'
import { currency } from '@/libs/currency-format'
import { toastError, toastInfo, toastSuccess } from '@/utils/toaster'
import { isEmptyValue } from '@/libs/validate'
import wallet from '@/actions/wallet'
import { Loader } from '@/components/loader'
import { useRouter } from 'next/router'

const Info = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className={styles.info}>
            <label>{label}</label>
            <p>{value}</p>
        </div>
    )
}

const Infomartion = ({ user, hires, balance }: { user: any, hires: Array<any>, balance:string }) => {

    const [value, setValue] = useState<string>('')
    const [showInput, setShowInput] = useState<boolean>(false)

    const router = useRouter();
    const refreshData = () => router.replace(router.asPath);

    const [isSubmitted, setSubmitted] = useState<boolean>(false)

    const handlerSubmit = async()=>{
      
        if(isEmptyValue(value)) return toastInfo('CAMPOS OBRIGATÓRIOS');
        setSubmitted(true)
        const body = {amount:value}
        const {data, error, code} = await wallet.topUpWalletBalance(body)
        
        setTimeout(()=>{
          setSubmitted(false)
           if(code == 201){
                toastSuccess(data.message)
                setValue('')
                setShowInput(false)
                refreshData()
           }else{
            toastError(data.message.toUpperCase())
           }
         
          
        },2000)
    }

    const renderHires = () => {
        return hires.map((hire, index) => {
            return <tr key={index}>
                <td>{hire.service}</td>
                <td>{currency.format(+hire.amount)}</td>
                <td>{hire.costumer}</td>
                <td>{hire.provider}</td>
                <td>{hire.hiringDate.substring(0, 10)} </td>


            </tr>
        })
    }
    return (
        <div>
            <div className={styles.all_info}>
                <div className={styles.section_info}>
                    <h1 className={styles.title}>Informação Basica</h1>
                    <img src="/images/avatar.jpg" alt="user avatar" className={styles.useravatar} />
                    <div className={styles.content_info}>
                        <Info value={user.fullName} label='Nome Completo :' />
                        <Info value={user.email} label='Email :' />
                        <Info value={user.NIF} label='NIF :' />
                        <Info value={user.userType} label='Tipo de Conta :' />
                    </div>
                </div>
                <div className={styles.box_wallet}>
                    <h1 className={styles.title}>Seu Saldo</h1>
                    <p className={styles.balance}>{currency.format(+balance)}</p>
                    <p className={styles.date}>Carregado ultima vez em : <span>20 de Junho 2024</span></p>
                    {showInput && <Input value={value} onchange={setValue}
                        label='Valor' placeholder='Digite o valor a carregar' type='number' />}
                    {showInput &&
                        <div className={styles.box_button}>
                            <button className={styles.button_submit} onClick={()=>handlerSubmit()} disabled={isSubmitted}>{isSubmitted ? <Loader size={9}/>:'Continuar'}</button>
                            <button onClick={() => setShowInput(false)} className={styles.button_load}>Cancelar</button>
                        </div>
                    }
                    {!showInput && <button onClick={() => setShowInput(true)} className={styles.button_load}><i className='bx bx-plus-circle'></i>Carregar</button>}
                </div>
            </div>

            {hires.length > 0 && <div className={styles.box_historic}>
                <h1 className={styles.title}>Historico</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Serviço</th>
                            <th>Preço</th>
                            <th>Cliente</th>
                            <th>Prestador</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderHires()}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}


export default Infomartion