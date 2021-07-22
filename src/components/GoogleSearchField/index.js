import {useState} from 'react';
import styles from './styles.module.css'
import { MdKeyboard, MdSearch } from "react-icons/md";
import micIcon from './../../assets/images/mic_google_icon.svg';
import SearchHistory from '../SearchHistory';
import {fruits as f} from '../../data/fruits';
const GoogleSearchField = () => {

    let fruits = f;
    const [sugestions, setSugestions] = useState([]);
    const [search, setSearch] = useState("");

    const onSearch = (text) => {
        const str = String(text);
        setSugestions(fruits.filter(fruit => fruit.text.toLowerCase().includes(str.toLowerCase())
        ))
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(search.length !== 0)
        fruits.unshift({text:search})
    }

    const removeItem = (text,e) => {
        e.preventDefault();
        fruits = fruits.filter(fruit => fruit.text !== text)
        setSugestions(sugestions.filter(sugestion => sugestion.text !== text))
    }

    return (
            <div>
                <form onSubmit={submitForm} className={`${styles.container} ${sugestions.length !== 0 ? styles.shadow:null}`} onMouseLeave={()=>setSugestions([])} >
                    <div className={`${styles.inputFieldContainer} ${sugestions.length === 0 ? styles.shadow:styles.borderBottom}`}>
                        <MdSearch size={20} className={styles.icon}/>
                        <input class={`${styles.inputField} ${styles.fill}`}
                         onChange={e => {onSearch(e.target.value);setSearch(e.target.value)}} onClick={onSearch} type="text"/>
                        <MdKeyboard size={25} className={styles.icon}/>
                        <img className={styles.imgIcon} src={micIcon} alt=""/>
                    </div>
                    {sugestions.map((sugestion,index) => {
                        return <SearchHistory key={index} icon={sugestion.icon} text={sugestion.text} subtitle={sugestion.subtitle} remove={removeItem}/>
                    })}
                    <div className={styles.searchButtonContainer}>
                        <input className={styles.searchButton} type="submit" value="Pesquisa Google"/>
                        <a className={`${styles.searchButton} center`} href="https://www.google.com/doodles">Sinto-me com sorte</a>
                    </div>
                </form>
                </div>
    );
}

export default GoogleSearchField;