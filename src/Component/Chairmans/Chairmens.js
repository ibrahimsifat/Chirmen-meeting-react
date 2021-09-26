import React from 'react';
import './Chairmens.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Chairmens = (props) => {
    // name,Union,peopleVapacity,price,
    const {img}=props.chairman;
const [disable, setDisable] = React.useState(false);
<FontAwesomeIcon icon={["fal", "coffee"]} />
        const icons=<FontAwesomeIcon icon={faUserPlus}/>
    return (
        
            <div className="card text-center col-md-3 my-2 mx-2" >
  <img className='userImg' src={img} alt="" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
    <button 
    disabled={disable}
         onClick={()=>{
             props.handleAddmember(props.chairman)
             setDisable(true)
            }} 
         className="btn btn-primary d-flex align-items-center justify-content-around mx-auto"
         
     >Add <span className='ps-2'>{icons}</span></button>
  </div>

        </div>
    );
};

export default Chairmens;