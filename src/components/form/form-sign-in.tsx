import { FormEvent, useState } from "react"
import Input from "../input"
import styles from './style.module.css'
import Link from "next/link"
import { Loader } from "../loader"
import { isEmptyValue } from "@/libs/validate"
import { toastError, toastInfo, toastSuccess } from "@/utils/toaster"
import Authentication from "@/actions/auth"
import { setCookie } from "cookies-next"
import { useRouter } from "next/router"

const FormLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isSubmitted, setSubmitted] = useState<boolean>(false)

  const router = useRouter()

  const submit = async(event:FormEvent)=>{

      event.preventDefault();
      if(isEmptyValue(email) || isEmptyValue(password)) return toastInfo('CAMPOS OBRIGATÓRIOS');
      setSubmitted(true)
      const body = {email, password}
      const {data, error, code} = await Authentication.signIn(body)
      
     
      
      setTimeout(()=>{
        setSubmitted(false)
         if(code == 200){
          toastSuccess(data.message.toUpperCase())
          setCookie('TOKEN', data.token)
          setCookie('INFO', data.user)
          router.push('/home')
         }else{
          toastError(data.message.toUpperCase())
         }
      },2000)
  }

  return (
    <form className={styles.form} autoComplete="off" onSubmit={submit}>
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
      <p className={styles.info}>Esqueceu a password ? <Link href="#">Recuperar</Link></p>
      <button className={styles.button_submit} disabled={isSubmitted}> {isSubmitted ? <Loader size={9}/> : 'Acessar '}</button>
    </form>
  )
}

export default FormLogin

