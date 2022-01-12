import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/customer'>Customers</Link>
        </div>
    )
}

export default Navbar
