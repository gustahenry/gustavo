import './App.css';
import Footer from './components/Footer';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
