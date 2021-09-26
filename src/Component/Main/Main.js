import React, { useEffect, useState } from 'react';
import List from '../AddedList/List';
import Chairmens from '../Chairmans/Chairmens';
import './Main.css'

const Main = () => {
const [chairmans,setCharimans]=useState([])
const [addMembers,setAddMembers]=useState([])
// get data from json
useEffect(()=>{
    fetch('./peopledb.json')
    .then(res =>res.json())
    .then(data=>setCharimans(data))
},[])
// add to chairmen card handle
const handleAddmember=(chairman)=>{
console.log(chairman.price)
const newChaimenArr=[...addMembers,chairman]
setAddMembers(newChaimenArr);
}
// total Budget
const totalBudget=200000;
return (
     <div>
         <div className="budget text-center  py-3">
<h5>Let's Make Chairman Meeting Celebration</h5>
<h6>Total Budget:{totalBudget}</h6>
         </div>
    <div className="container">
    <div className='row'>
            <div className="col-md-9 text-center mt-5">
                <div className="row">
                    {
                        chairmans.map(chairman=><Chairmens
                        chairman={chairman}
                        key={chairman.price}
                        handleAddmember={handleAddmember}
                        ></Chairmens>)
                    }
                </div>
                
            </div>
            <div className="col-md-3 text-left added">
                <List 
                addMembers={addMembers}
                ></List>
            </div>
        </div>
    </div>
     </div>
    );
};

export default Main;