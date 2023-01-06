import React from 'react'
import { Link } from 'react-router-dom'

const design ={
    textDecoration:'none',
    color:'white',
    float:'right',
    fontSize:'20px',
    marginRight:'20px'
}

function Navbar() {
    return (
        <>

            <nav style={{backgroundColor:'teal', width:'100%', paddingBottom:'5px'}}>
                <Link className='nav-link' style={design} to='/create'>Sign Up</Link>
                <Link className='nav-link' style={design} to='/login'>Sign In</Link>
                <Link className='nav-link' style={design}  to='/reset'>Home</Link>
            </nav>
        </>
    )
}

export default Navbar
