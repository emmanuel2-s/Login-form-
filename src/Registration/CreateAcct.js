import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import WebcamCapture from './Gocam';

function CreateAcct() {
    const navigate= useNavigate();

    const [visible,setVisible]=useState(false);

    const change =()=>{
        if (!visible){
            setVisible(true)
        }else{
            setVisible(false)
        }
    
    }


const [users,setUsers] = useState({})

const handleChange =(e)=>{
    const {name,value} = e.target;
    setUsers(({...users,[name]:value}))
    
}

const handleSubmit=(e)=>{
    e.preventDefault();
    Swal.fire({icon:'success',
    title:'Account Created Successfully'});
    storeInLocalStorage();
}


const storeInLocalStorage = ()=>{
    let usersData=JSON.parse(localStorage.getItem('usersData'))
    if(localStorage.getItem('usersData') === null){
        usersData= [];
    }
    const exits = usersData.find(x=> x.email ===users.email && x.phone===users.phone)
    if(exits){
        return Swal.fire({icon:'warning',timerProgressBar:'green',title:'Email already Exist'});
    
    }else{
        usersData.push(users)
        localStorage.setItem('usersData', JSON.stringify(usersData))
        navigate('/login')
    }
}

  return (
    <div className='wrapper'>
      <div className='bg-dark p-5'>
      <form onSubmit={handleSubmit} className='row'>
        <h2 className='mb-4'>Sign Up Here</h2>
        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>First Name:</label>
            <input type='text' className='form-control' name='FirstName'
            value={users.FirstName||''}
            onChange={handleChange}
             placeholder='Enter firstname' required />
        </div>

        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>Last Name:</label>
            <input type='text' className='form-control' name='LastName'
            value={users.LastName||''}
            onChange={handleChange}
             placeholder='Enter lastname' required />
        </div>
      
        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>Email:</label>
            <input type='email' className='form-control' name='Email'
            value={users.Email||''}
            onChange={handleChange}
             placeholder='Example@gmail.com' required />
        </div>

        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>password:</label>
            <input type='password' className='form-control' name='password'
            value={users.password||''}
            onChange={handleChange}
             placeholder='Enter password' required/>
        </div>

        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>Age:</label><br/>
            <input type='radio' name='Age' value='18 & 35'
            onChange={handleChange}  /><span className='ms-2 me-3'>18 & 35</span>
            <input type='radio' name='Age' value='35 & Above'
            onChange={handleChange} /><span className='ms-2'>35 & Above</span>
        </div>
        
        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>Date:</label>
            <input type='date' className='form-control' name='Date'
            value={users.Date||''}
            onChange={handleChange} required/>
        </div>
        

        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>Phone-No:</label>
            <input type='tel' className='form-control' name='phone' 
            value={users.phone||''}
            onChange={handleChange}
            placeholder='Enter phone-No' required/>
        </div>
        <div className='col-md-3 form-group mb-3'>
            <label className='form-label text-white'>Country:</label>
            <input type='text' className='form-control' name='Country'
            value={users.Country ||''}
            onChange={handleChange}
             placeholder='Enter your country'required />
        </div>

        <div className='form-group mb-3'>
            <label className='form-label text-white'>Brief-bio:</label>
            <textarea type='text' className='form-control' name='Biography'
             placeholder='We did like to know more about you?'
             value={users.Biography ||''}
            onChange={handleChange} />
        </div>
        <div className='mb-3'>
            <button onClick={change} >Take Photo</button>
            {visible && <>
            {<WebcamCapture/>}
            </>}
        </div>
        
        <div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </div>
      </form>
      </div>
    </div>
  )
}

export default CreateAcct
