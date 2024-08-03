import styles from './style.module.css'
import CardService from '@/components/service/card-service'
import Input from '@/components/input'
import { FormEvent, useState } from 'react'
import service from '@/actions/service'
import { Loader } from '@/components/loader'
import { toastError, toastInfo, toastSuccess } from '@/utils/toaster'
import { isEmptyValue } from '@/libs/validate'

const CreateService = ({changeIndex, user}:{changeIndex:Function, user:any}) =>{
    const [price, setPrice] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [isSubmitted, setSubmitted] = useState<boolean>(false)

    const handlerSubmit = async(event:FormEvent)=>{
        event.preventDefault();
        if(isEmptyValue(title) || isEmptyValue(description) || isEmptyValue(price) || isEmptyValue(category) ) return toastInfo('CAMPOS OBRIGATÓRIOS');
        setSubmitted(true)
        const body = {title, category, price, description}
        const {data, error, code} = await service.create(body)
        console.log(data, code)
        
        setTimeout(()=>{
          setSubmitted(false)
           if(code == 201){
                toastSuccess(data.message)
                setTitle('')
                setDescription('')
                setCategory('')
                setPrice('')
           }else{
            toastError(data.message.toUpperCase())
           }
         
          
        },2000)
    }
    return(
        <div className={styles.container_create_service}>

            <form className={styles.form} onSubmit={handlerSubmit}>
                <Input value={title} onchange={setTitle}
                type='text' label='Titulo :' placeholder='Degite o titulo do serviço'/>
                
                <div className={styles.content_input}>
                <Input  value={price} onchange={setPrice}
                type='number' label='Preço :' placeholder='Degite o preço'/>
                    
                    <div className={styles.box_field}>
                        <label>Categoria :</label>
                        <input type="text" list='category' value={category} onChange={(e)=>setCategory(e.target.value)} className={styles.input_list}/>
                        <datalist id='category'>
                            <option value="Saude" />
                            <option value="Educacional" />
                            <option value="Beleza e Bem-estar" />
                            <option value="Tecnologia" />
                            <option value="Alimentação" />
                            <option value="Financeiro" />
                            <option value="Juridico" />
                            <option value="Transporte" />
                            <option value="Entretenimento" />
                            <option value="Construção" />
                        </datalist>
                    </div>
                </div>
                <div className={styles.box_textarea}>
                <label>Descrição :</label>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)}
                placeholder="Digite a descrição do serviço" maxLength={100}/>
                </div>

                <div className={styles.box_button}>
                            <button className={styles.button_submit} disabled={isSubmitted}>{isSubmitted ? <Loader size={9}/> : 'Criar'}</button>
                            <button type='button' className={styles.button_add} onClick={()=>changeIndex(0)}>Cancelar</button>
                </div>
            </form>
            <div className={styles.content_preview}>
                <CardService 
                    title={title}
                    avatar='https://randomuser.me/api/portraits/men/82.jpg'
                    provider={user.fullName}
                    price={price}
                    category={category}
                    action={()=>{}}
                    description={description}
                    date={new Date().toLocaleDateString()}
                />
            </div>
            

        </div>
    )
}

export default CreateService