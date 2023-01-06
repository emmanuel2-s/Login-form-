import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';

function LoginForm() {

  const [user,setUser] = useState({email:'', password:'', checkbox:''});

const handleChange =(e)=>{
  const {name,value} = e.target;
      setUser(({...user,[name]:value}))
}

const handleSubmit=(e)=>{
  e.preventDefault();

  if(user){
    Swal.fire({icon:'success',
    title:'Login Successful',timerProgressBar:'0.3s'});
    storeLoginData();
    
  }
 
};


const storeLoginData= ()=>{
  let singleUser =JSON.parse(localStorage.getItem('usersData'))
  console.log(singleUser)
  if(singleUser === null){
    return Swal.fire('Wrong Credential','please try again','warning');
  }else{
    const exists = singleUser.find(x=> x.Email === user.email && x.password === user.password);
    if(exists){
      localStorage.setItem('singleUser', JSON.stringify(exists));
  
  }else{
    return Swal.fire('Wrong Credential','please try again','warning');
 
  }
  // console.log(exists)
  }
}

  return (
    <div className='header'>
      <div className='row'>
        <div className='col-md-6'>

        </div>
        <div className='header-content col-md-5 bg-white p-5 rounded'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='form-group mb-3'>
            <label className='form-label text-dark'>Email:</label>
            <input type='email' className='form-control' name='email'
            value={user.email}
            onChange={handleChange}
             placeholder='Enter email' required />
        </div>

        <div className='form-group mb-3'>
            <label className='form-label text-dark'>password:</label>
            <input type='password' className='form-control' name='password'
            value={user.password}
            onChange={handleChange}
             placeholder='Enter password' />
        </div>

        
        <div className='form-group mb-3'>
         <label><input type='checkbox' name='checkbox'value={user.checkbox}
            onChange={handleChange} /> Remember me</label>
        </div>

        <button type='submit' className='btn btn-primary'>Login</button>
         <br/>
         <br/>
        <Link className='link' to='/forgot'>forgot password?</Link> |
        <Link className='link' to='/create'>sign up here</Link>
      </form>
      </div>
      </div>
    </div>
  )
}

export default LoginForm
