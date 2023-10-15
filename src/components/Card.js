import React from 'react'

const Card =({name, email, id})=>{
    return(
      
        <div className = 'bg-light-green br3 dib pa3 ma2 bw2 grow shadow-5'>  
            <img alt = "janedoe" src ={ `https://robohash.org/${id}?200x200`}/>
            <div>
                 <h2 className='f3 ma0 pa0'>{name}</h2>
                 <h3 className = 'f4 ma0 pa0'>{email}</h3>
            </div>
           
        </div>
            
    )
}

export default Card;