import styles from './styles.module.css'
import { IoApps } from "react-icons/io5";
import userImg from './../../assets/images/joel.jpg'

const Navbar = () => (
    <div className={styles.navbar}>
        <div>
            <a className={styles.link} href="#">Gmail</a>
            <a className={styles.link} href="#">Imagens</a>
        </div>
        <div>
            <IoApps size={20}/>
            <img className={styles.img} src={userImg} alt=""/>
        </div>
        
    </div>
);

export default Navbar;