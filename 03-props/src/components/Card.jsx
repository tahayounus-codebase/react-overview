import React from 'react'

const Card = (props) => {
    console.log(props.user , props.age);
    
    return (
        <div className="card">
            <img src="https://i.pinimg.com/736x/53/66/e3/5366e3e2060e418bad28c22451572488.jpg" alt="" />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repudiandae?</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card
