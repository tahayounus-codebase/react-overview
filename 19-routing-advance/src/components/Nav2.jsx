import React from 'react'
import {useNavigate} from 'react-router-dom'
const Nav2 = () => {
    let navigate = useNavigate();
    return (
        <div className='py-3 px-6 bg-cyan-700'>
            <button className='m-2 bg-blue-600 px-5 py-2 rounded cursor-pointer active:scale-95' onClick={() => {
                navigate('/')
            }}>go to home page</button>

            <button className='m-2 bg-blue-600 px-5 py-2 rounded cursor-pointer active:scale-95' onClick={() => {
                navigate(-1)
            }}>Back</button>

            <button className='m-2 bg-blue-600 px-5 py-2 rounded cursor-pointer active:scale-95' onClick={() => {
                navigate(+1)
            }}>Next</button>
        </div>
    )
}

export default Nav2