// import './App.css';
import Home from './Home';
import Load from './Load';
import Signup from './Signup';
import Signin from './Signin';
import {Routes,Route} from 'react-router-dom';

export default function App(){
  return (
    <div className='App'>
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="Load" element={<Load />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
