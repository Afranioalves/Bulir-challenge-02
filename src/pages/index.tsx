import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Metadata from "@/components/metadata";
import Input from "@/components/input";
import Link from "next/link";
import { useState } from "react";
import FormSignUp from "@/components/form/form-sign-up";
import FormLogin from "@/components/form/form-sign-in";
import { ToastContainer } from "react-toastify";




export default function Home() {

  const [index, setIndex] = useState<number>(0)
  return (
    <>
     <Metadata title="Autenticação"/>
     <ToastContainer />
      <main className={styles.main}>

        <div className={styles.banner}>

            <img src="/images/girl.svg" alt="girl image" className={styles.image}/>
            <p className={styles.description}>Com a offices, encontrar e publicar serviços,<br /> ficou facil como nunca, crie uma conta e comece a desfrutar</p>
        </div>
        <div className={styles.box_forms}>
          <img src="/logo.svg" className={styles.logo}/>
            <div className={styles.section}>
              <div className={styles.box_option}>
                <button className={index == 0 ? styles.selected : ''} onClick={()=>setIndex(0)}>Login</button>
                <button className={index == 1 ? styles.selected : ''} onClick={()=>setIndex(1)}>Criar conta</button>
              </div>
              {index == 0 && <FormLogin />}
              {index == 1 && <FormSignUp setIndex={setIndex}/>}
            </div>
           
        </div>
       
      </main>
    </>
  );
}

