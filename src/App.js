import logo from './logo.svg';
import './App.css';
import { Login } from './loginpage/Login';
import { Navbar } from './loginpage/Navbar';
import { Route, Routes } from 'react-router-dom';
import { User } from './loginpage/User';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='Login' element={<Login/>}></Route>
     <Route path='/SignUp' element={<User/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
