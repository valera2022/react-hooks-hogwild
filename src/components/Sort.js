import React from "react";

function Sort({sortFromApp,setSortBy}){
  
    
    function handleAppOps(e){
        setSortBy(e.target.value)
        console.log(e.target.value)
    }
    console.log(sortFromApp)

return (
<div>
    <select onChange={handleAppOps} value={sortFromApp}>     
    <option>ALL</option>
    <option >Name</option >
    <option>Weight</option >
   </select>
 </div>)
   
}



export default Sort