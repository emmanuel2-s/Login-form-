import React,{useState} from 'react'

function ResetPassword() {

const [reset,setReset] = useState({Oldpassword:'',Newpassword:'',Comfirmpassword:''})

const handleChange = (e)=>{
    const {name,value} = e.target;
    setReset(({...reset,[name]:value}))
}

  return (
    <div className='resetp'>
      <div className='row'>
        <div className='col-md-6'>

        </div>
       <div className='col-md-4 bg-white p-5 rounded'>
      <form>
      <h2>Reset password !!</h2>
                <p className='text-center'>An email will be sent to ur email address.</p>
                <p className='text-center'>Click on verify to reset your old password :)</p>
        <div className='form-group mb-3'>
            <label className='form-label text-dark'>Email:</label>
            <input type='password' className='form-control' name='email'
            value={reset.email || ''}
            onChange={handleChange}
             placeholder='Enter email' />
        </div>

        {/* <div className='form-group mb-3'>
            <label className='form-label text-dark'>New-password:</label>
            <input type='password' className='form-control' name='Newpassword' 
            value={reset.Newpassword ||""}
            onChange={handleChange}
            placeholder='Enter New-password' />
        </div>

        <div className='form-group mb-3'>
            <label className='form-label text-dark'>Confirm-password:</label>
            <input type='password' className='form-control' name='Comfirmpassword'
            value={reset.Comfirmpassword || ''}
            onChange={handleChange}
             placeholder='Confirm password' />
        </div> */}

        <button className='btn btn-secondary'>Submit</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default ResetPassword;
