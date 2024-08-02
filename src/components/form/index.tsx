import { useState } from "react"
import Input from "../input"
import styles from './style.module.css'
import Link from "next/link"
import { Loader } from "../loader"

export const FormLogin = () =>{
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return(
      <form className={styles.form} autoComplete="off">
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
      <button className={styles.button_submit}>Acessar</button>
  </form>
    )
  }
  
  export const FormSignUp = () =>{
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [NIF, setNIF] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userType, setUserType] = useState<string>('CLIENTE')
    return(
      <form className={styles.form} autoComplete="off">
        <div className={styles.box_option}>
          <button type='button' onClick={()=>setUserType('CLIENTE')} className={userType == 'CLIENTE' ? styles.selected : ''}><i className='bx bx-user'></i>Cliente</button>
          <button type='button'  onClick={()=>setUserType('PRESTADOR')} className={userType == 'PRESTADOR' ? styles.selected : ''}><i className='bx bx-briefcase-alt-2'></i>Prestador</button>
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
      <button className={styles.button_submit}>Registar-se</button>
  </form>
    )
  }
  