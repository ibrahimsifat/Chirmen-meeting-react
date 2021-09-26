import React, { useEffect, useState } from 'react';
import List from '../AddedList/List';
import Chairmens from '../Chairmans/Chairmens';
import './Main.css'

const Main = () => {
    // all useState
const [chairmans,setCharimans]=useState([])
const [addMembers,setAddMembers]=useState([])
const [totalLefts,setTotallefts]=useState(300000)
// get data from json
useEffect(()=>{
    fetch('./peopledb.json')
    .then(res =>res.json())
    .then(data=>setCharimans(data))
},[])
const totalBudget=300000;
let totalLeft=totalBudget;
let addprice=[]
// add to chairmen card handle
const handleAddmember=(chairman)=>{
// console.log(chairman.price)
const newChaimenArr=[...addMembers,chairman]
setAddMembers(newChaimenArr);
// sum all price 
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// get all price and push new array
newChaimenArr.forEach(moneyLeft =>{ 
    const leftMoney=moneyLeft.price
addprice.push(leftMoney)
});


const redusepirce=addprice.reduce(reducer)
totalLeft=totalBudget-redusepirce
// useState
setTotallefts(totalLeft)
}
// total Budget
return (
     <div>
         <div className="budget text-center  py-3">
<h5>Let's Make Chairman Meeting Celebration</h5>
<h4>Total Budget:<strong>{totalBudget}</strong></h4>
<h4>Total Left:<strong>{totalLefts}</strong></h4>
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