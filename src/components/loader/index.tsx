import styles from './style.module.css'


export const Loader = (props:{size:number}) =>{
    const {size} = props
    return(
        <div className={styles.loader}>
        <span className={styles.dot} style={{width:size, height:size}}></span>
        <span className={styles.dot} style={{width:size, height:size}}></span>
        <span className={styles.dot} style={{width:size, height:size}}></span>
        </div>
    )
}