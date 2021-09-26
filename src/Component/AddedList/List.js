import React from 'react';
import './List.css'
const List = (props) => {
let total=0

for (const addedPrice of props.addMembers){

  total=addedPrice.price+total
}
    return (
        <div>
            <h3 className='fw-bold my-3'>Added Chirman: {props.addMembers.length}</h3>
            {
                props.addMembers.map(member=><DisplayList
                     member={member}
                     key={member.name}
                     ></DisplayList>)
            }

            <h4 className='mt-3'>Total Price:{total}</h4>
        </div>
    );
};
const DisplayList=(props)=>{
const {member}=props
    const {name,img,price}=member
    return(
        <div>

<ul>
    <li>
    
    <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      
          <img src={img}  className="img-fluid rounded-start borderd" alt="" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-title"><small>Name: {name}</small></p>
        <p className="card-title"><small>Price: {price}</small></p>
       
      </div>
    </div>
  </div>
</div>
    
    </li>
</ul>
    
        </div>
    )
}

export default List;