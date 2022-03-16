import React from 'react';
import './About.css';

const About = () =>{
    return(< div className='about' >  
    
       <div className='hello'><h5 >Hello, My Name is <h2>Manel EL YOUNSI</h2> and I make horrible websites.</h5></div> 
        <img src={"/me.jpg"} className='Image'/>
    </div>);
}

export default About;