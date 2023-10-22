import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Coin from './pages/Coin';
import Home from './pages/home';
import Compare from './pages/Compare'
import Watchlist from './pages/Watchlist';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
          < Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Coin1/:id' element={<Coin/>}/>
          <Route path='/Compare' element={<Compare/>}/>
          <Route path='/Watchlist' element={<Watchlist/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
