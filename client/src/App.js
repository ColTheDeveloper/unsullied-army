//import { UAState } from './Context/uaDetailsProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import 'react-toastify/dist/ReactToastify.css';

// FontAwesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBarsStaggered, faBars, faEye,faEyeSlash, faCaretDown,faCircleExclamation,faXmark,faCheck } from "@fortawesome/free-solid-svg-icons";
import EditProfile from './Pages/EditProfile/EditProfile';
import Security from './Pages/Security/Security';
import ProfileSocial from './Subpages/ProfileSocial/ProfileSocial';
import ProfileTeam from './Subpages/ProfileTeam/ProfileTeam';
import 'reactjs-popup/dist/index.css';
import TeamDetails from './Pages/TeamDetails/TeamDetails';
import TeamEvent from './Subpages/TeamEvent/TeamEvent';
import TeamMember from './Subpages/TeamMember/TeamMember';
import TeamSocial from './Subpages/TeamSocial/TeamSocial';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
//import SetAuth from './hooks/SetAuth';



library.add(faBarsStaggered, faBars,faEye,faEyeSlash,faCaretDown,faCircleExclamation,faXmark,faCheck);

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/'  element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="teams" element={<h1>Teams</h1>} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<h1>Error</h1>} />
            <Route  element={<ProtectedRoute />} >
              <Route path='/:username' element={<Profile />} >
                <Route index element={<EditProfile />} />
                <Route path='security' element={<Security />} />
                <Route path='socials' element={<ProfileSocial />} />
                <Route path='team' element={<ProfileTeam />} />
              </Route>
            </Route> 
            <Route path="team/team-name" element={<TeamDetails />}>
              <Route index element={<TeamEvent />} />
              <Route path='members' element={<TeamMember />} />
              <Route path='social' element={<TeamSocial />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
