
import './App.css';
import Collection from './Componet/Collection/Collection';
import Footer from './Componet/Footer/Footer';
import Main from './Componet/Main/Main';
import Navbar from './Componet/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Main />
     <Collection />
      <Footer />
    </div>
  );
}

export default App;
