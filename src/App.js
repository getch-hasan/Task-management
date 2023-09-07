
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Projects from './Pages/Projrcts/Projects';
import Calander from './Pages/Calander/Calander';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import RequireAuth from './Required/Required';
import Team from './Pages/Team/Team';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/project' element={<RequireAuth><Projects></Projects></RequireAuth>}></Route>
        <Route path='/team' element={<RequireAuth><Team></Team></RequireAuth>}></Route>
        <Route path='/calender' element={<RequireAuth><Calander></Calander></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>



      </Routes>
    </div>
  );
}

export default App;
