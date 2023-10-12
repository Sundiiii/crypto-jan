import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
