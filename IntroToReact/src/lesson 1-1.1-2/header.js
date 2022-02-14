import React from 'react';
 
const header = (props) => {
    console.log(props)
    return (
        <div>
           <p>{props.course}</p> 
        </div>
    );
}
 

 
export default header;