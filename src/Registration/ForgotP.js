import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import{useForm} from 'react-hook-form'
import Swal from 'sweetalert2'

function ForgotP() {

  const [visible,setVisible] = useState(false);
const [forgot,setForgot] = useState({email:'',password:''})

const handleChange=(e)=>{
    const {name,value} = e.target;
    if(name === 'email'){
      const singleUser = JSON.parse(localStorage.getItem('usersData'));
      const check = singleUser.find(x=> x.Email === value);
      if(check){
        setVisible(true)
      }else{
        setVisible(false)
        setValue('newpassword','')
        forgot.password = ''
      }
    }
    setForgot(({...forgot,[name]:value}))
}

const {setValue,register,handleSubmit,formState:{errors}}=useForm({
  mode: 'onChange',
  reValidateMode: 'onChange'
});

const onSubmit =()=>{
  let singleUser =JSON.parse(localStorage.getItem('usersData'))
      const check = singleUser.find(x=> x.Email === forgot.email);
      check.password = forgot.password;

      localStorage.setItem('usersData',JSON.stringify(singleUser))

    return Swal.fire({icon:'success',
    title:'Login Successful'});
}


  return (
    <div className='forgotp'>
      <div className='row'>
        <div className='col-md-6'>

        </div>
        <div className='col-md-4 bg-white p-5 rounded'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Forgot password !!</h2>
        <div className='form-group mb-3'>
            <label className='form-label text-dark'>Email:</label>
            <input type='email' className='form-control' name='email'
            value={forgot.email}
            onChange={handleChange}
             placeholder='Enter email' />
        </div>
         {visible && <>
        <div className='form-group mb-3'>
            <label className='form-label text-dark'>New-password:</label>
            <input {...register('password',{required:true})} type='password' className='form-control' name='password'
              value={forgot.password}
              onChange={handleChange}
             placeholder='Enter New-password' />
        </div>

        <button type='submit' className='mb-4 btn btn-secondary'>Submit</button>
         <br/>
         </>}
         
        <Link className='link' to='/reset'>Reset Password</Link>

      </form>
      </div>
      </div>
    </div>
  )
}

export default ForgotP
