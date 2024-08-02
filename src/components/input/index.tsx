import styles from './style.module.css'

const Input = ({label, type, placeholder, value, onchange}:{label:string, placeholder:string, type:string, value:string, onchange:Function}) =>{
    return(
        <div className={styles.input_field}>
            <label>{label}</label>
            <input 
            type={type}
            autoComplete='off'
            value={value}
            onChange={(e)=>onchange(e.target.value)}
            placeholder={placeholder}/>
        </div>
    )
}

export default Input