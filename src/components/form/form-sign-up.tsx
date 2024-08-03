import { FormEvent, useState } from 'react'
import styles from './style.module.css'
import Input from '../input'
import { useRouter } from 'next/router'
import { isEmptyValue } from '@/libs/validate'
import Authentication from '@/actions/auth'
import { toastError, toastInfo, toastSuccess } from '@/utils/toaster'
import { Loader } from '../loader'

const FormSignUp = ({setIndex}:{setIndex:Function}) => {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [NIF, setNIF] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userType, setUserType] = useState<string>('CLIENTE')
    const [isSubmitted, setSubmitted] = useState<boolean>(false)

    const router = useRouter()

    const submit = async(event:FormEvent)=>{
  
        event.preventDefault();
        if(isEmptyValue(email) || isEmptyValue(password) || isEmptyValue(name) || isEmptyValue(NIF)) return toastInfo('CAMPOS OBRIGATÓRIOS');
        setSubmitted(true)
        const body = {email, password, fullName:name, NIF, userType}
        const {data, error, code} = await Authentication.create(body)
        
        setTimeout(()=>{
          setSubmitted(false)
           if(code == 201){
            toastSuccess(data.message.toUpperCase())
            setIndex(0)
           }else{
            toastError(data.message.toUpperCase())
           }
        },2000)
    }
    
    return (
      <form className={styles.form} autoComplete="off" onSubmit={submit}>
        <div className={styles.box_option}>
          <button type='button' onClick={() => setUserType('CLIENTE')} className={userType == 'CLIENTE' ? styles.selected : ''}><i className='bx bx-user'></i>Cliente</button>
          <button type='button' onClick={() => setUserType('PRESTADOR')} className={userType == 'PRESTADOR' ? styles.selected : ''}><i className='bx bx-briefcase-alt-2'></i>Prestador</button>
        </div>
        <Input
          type="text"
          label="Nome"
          value={name}
          onchange={setName}
          placeholder="Deigite o seu nome"
        />
        <Input
          type="text"
          label="NIF"
          value={NIF}
          onchange={setNIF}
          placeholder="Deigite o seu NIF"
        />
        <Input
          type="email"
          label="Email"
          value={email}
          onchange={setEmail}
          placeholder="Deigite o seu email"
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onchange={setPassword}
          placeholder="Digite a sua password"
        />
        <button className={styles.button_submit} disabled={isSubmitted}>{isSubmitted ? <Loader size={9}/>: ' Registar-se '}</button>
      </form>
    )
  }
  

  export default FormSignUp