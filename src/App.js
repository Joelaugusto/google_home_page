import googleImg from './assets/images/googlelogo_color_272x92dp.png'
import styles from './App.module.css';
import GoogleSearchField from './components/GoogleSearchField';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Languages from './components/Languages';

function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
      <img src={googleImg} alt="Google Logo"/>
      <GoogleSearchField/>
      <Languages />
      <Footer/>
    </div>
  );
}

export default App;
