import React from 'react';
import './Chairmens.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Chairmens = (props) => {
    // name,Union,peopleVapacity,price,
    const {img,name,Union,peopleCapacity,price}=props.chairman;
const [disable, setDisable] = React.useState(false);
<FontAwesomeIcon icon={["fal", "coffee"]} />
        const icons=<FontAwesomeIcon icon={faUserPlus}/>
    return (
        
            <div className="card text-center col-md-3 my-2 mx-2" >
  <img className='userImg' src={img} alt="" />
  <div className="card-body">
    <h5 className="card-title fw-bold">{name}</h5>
    <div className="detals mt-3 ">
    <p><strong>Union:</strong> {Union}</p>
    <p><strong>Pepole:</strong> {peopleCapacity}</p>
    <p><strong>Price: </strong>{price}</p>
    
    </div>
 
    <button 
    disabled={disable}
         onClick={()=>{
             props.handleAddmember(props.chairman)
             setDisable(true)
            }} 
         className="btn btn-dark d-flex align-items-center justify-content-around mx-auto"
         
     >Add <span className='ps-2'>{icons}</span></button>
  </div>

        </div>
    );
};

export default Chairmens;