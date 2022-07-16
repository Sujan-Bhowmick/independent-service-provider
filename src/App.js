
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
