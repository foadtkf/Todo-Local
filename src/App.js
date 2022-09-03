import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddBlog from './Components/Pages/AddBlog';
import All from './Components/Pages/All';
import Community from './Components/Pages/Community';
import Entertainment from './Components/Pages/Entertainment';
import Tech from './Components/Pages/Tech';
import Banner from './Components/Shared/Banner';
import Navbarcomp from './Components/Shared/Navbarcomp';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Navbarcomp/>
      <Banner/>
      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/tech' element={<Tech/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/add' element={<AddBlog/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
