import './App.css';
import Heder from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Maincomponent from './components/landingpage/maincomp/maincomponent';
function App() {
  return (
    <div className="App">
    <Heder/>
    <Maincomponent/>
    <Footer/>
    </div>
  );
}

export default App;
