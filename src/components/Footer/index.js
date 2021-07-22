import styles from './styles.module.css'
const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.country}>Moçambique</p>
        <div className={styles.linkGroupContainer}>
            <ul className={styles.linkGroup}>
                <li><a className={styles.link} href="#">Sobre</a></li>
                <li><a className={styles.link} href="#">Publicidade</a></li>
                <li><a className={styles.link}  href="#">Negócios</a></li>
                <li><a className={styles.link}  href="#">Como Funciona a Pesquisa</a></li>
            </ul>
            <ul className={styles.linkGroup}>
                <li><a className={styles.link} href="#">Privacidade</a></li>
                <li><a className={styles.link}  href="#">Termos</a></li>
                <li><a className={styles.link} href="#">Definições</a></li>
            </ul>
        </div>
    </footer>
);


export default Footer;