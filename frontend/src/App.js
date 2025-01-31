import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scan from './pages/Scan';
import Index from './pages/Index';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SignUpPage from './pages/SignUpPage';
import Download from './pages/Download';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<SignIn/>} />
        <Route path='/scan' element={<Scan/>} />
        <Route path='/signuppage' element={<SignUpPage/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/download-data' element={<Download/>} />
      </Routes>
    </Router>
  );
}

export default App;
