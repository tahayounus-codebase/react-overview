import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <h3>ProtoMax</h3>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product.store'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar