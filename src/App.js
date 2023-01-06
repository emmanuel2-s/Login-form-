import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CreateAcct from './Registration/CreateAcct';
import ForgotP from './Registration/ForgotP';
import LoginForm from './Registration/LoginForm';
import ResetPassword from './Registration/ResetPassword';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Registration/Navbar';
import Particle from './Registration/particles';
// import Webcam from './Registration/Webcam';


function App() {
  return (

    <div className="App">

     
     <BrowserRouter>
    
     <Navbar />
     {/* <Webcam/> */}
     <Particle className='particle' />
     <Routes>
      <Route exact path='/login' element={<LoginForm />} />
      <Route exact path='/create' element={<CreateAcct />} />
      <Route exact path='/forgot' element={ <ForgotP />} />
      <Route exact path='/reset' element={<ResetPassword />} />
     </Routes>
     </BrowserRouter>
     
      
     
      
      
    </div>
  );
}

export default App;
