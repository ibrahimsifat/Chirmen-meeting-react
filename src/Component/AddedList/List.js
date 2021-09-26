import React from 'react';
import './List.css'
const List = (props) => {

    // name,Union,peopleVapacity,price,
    // const{addMembers}=props.addMembers;
    // const{price}=props.addMembers;
let total=0

for (const addedPrice of props.addMembers){
  console.log(addedPrice);
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
    const {name,img,price}=props.member
    return(
        <div>

<ul>
    <li>
    
    <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      
          <img src={img}  class="img-fluid rounded-start borderd" alt="" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-title"><small>Name: {name}</small></p>
        <p class="card-title"><small>Price: {price}</small></p>
       
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