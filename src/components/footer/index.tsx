import Link from 'next/link'
import styles from './style.module.css'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.title}>Quem Somos</h2>
                    <p className={styles.description}>Lorem ipsum amet consectetur adipisicing elit.<br /> Quisquam similique ipsum doloremque perferendis<br />velit quaerat, non obcaecati ab voluptatibus error culp</p>
                    <p className={styles.contact}>T. (+244) 945784 248</p>
                    <p className={styles.contact}>E. afranio777alves@gmail.com</p>
                </div>

                <div>
                    <h2 className={styles.title}>Serviços</h2>
                    <ul>
                        <li>Developer Software</li>
                        <li>Carpinteiro</li>
                        <li>Manicure</li>
                        <li>Pedicure</li>
                    </ul>
                </div>

                <div>
                    <h2 className={styles.title}>Apoio</h2>
                    <ul>
                        <li><Link href="#">Política de privacidade</Link></li>
                        <li><Link href="#">Termos de Uso</Link></li>
                        <li><Link href="#">Central de Ajuda</Link></li>
                        <li><Link href="#">Documentação</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className={styles.title}>Contactos</h2>
                    <ul>
                        <li><Link href="https://www.linkedin.com/in/afranioalves/" target='blank'><i className='bx bxl-linkedin-square' ></i>Linkdin</Link></li>
                        <li><Link href="https://x.com/Afranio777" target='blank'><i className='bx bxl-twitter' ></i>Twitter</Link></li>
                        <li><Link href="https://web.facebook.com/afranioalves.alves.754" target='blank'><i className='bx bxl-facebook-square'></i> Facebook</Link></li>
                        <li><Link href="https://www.instagram.com/afranioalvez/"><i className='bx bxl-instagram-alt' ></i>Instagram</Link></li>
                        <li><Link href="https://www.youtube.com/@afranioalves3953/featured"><i className='bx bxl-youtube' ></i>Youtube</Link></li>
                    </ul>
                </div>
            </div>




            <div className={styles.box_copyright}>
                <p><i className='bx bx-copyright'></i>2024 Offices. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer