import React from 'react'; 
import './index.css';



const Contact = () => {
    return (
       <div className='basic'>
           
           <ul>
               {["Derik", "Bob", "New User"].map((contact, 
               idx) => {
                   return <li key={idx}>{contact}</li>;
               })}
           </ul>
       </div>
    );
};
 
export default Contact;