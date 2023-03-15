import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';

// FontAwesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBarsStaggered, faBars, faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

library.add(faBarsStaggered, faBars,faEye,faEyeSlash);

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route path='/'  element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="teams" element={<h1>Teams</h1>} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<h1>Error</h1>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
