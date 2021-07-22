import {MdAccessTime } from "react-icons/md";
import styles from './styles.module.css';

const SearchHistory = (props) => (
    <div className={`${styles.history} ${styles.container} ${props.icon ? styles.withPic:styles.withoutPic}`}>
        <div className={styles.container}>
            {props.icon ?<img className={styles.icon} src = {props.icon} alt=""/>:<MdAccessTime />}
            <div className={styles.textContainer}>
                <span>{props.text}</span>
                <span>{props.subtitle}</span>
            </div>
        </div>
        <button className={styles.button} onClick={(e)=>{props.remove(props.text,e)}}>Remover</button>
    </div>
);

export default SearchHistory;