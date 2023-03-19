import {React,useState} from "react";


 function Tile({hog}){
    //  console.log(hogs)
    const[toggle,setToggle]=useState(false)
    

    // console.log(hog)
    function handleClick(){
       setToggle(!toggle)
     }
    

        return <div className="ui grid container">
        <h3 className="ui eight wide column">{hog.name}</h3>
       <img className="ui eight wide column"  src={hog.image} alt="shutup" width="200" length="200"  onClick={handleClick} />
       <h2 className="ui eight wide column">{hog.greased}</h2>
       {toggle ?
         <div className="ui grid container">
             <h2 className="ui eight wide column">{hog.specialty}</h2>
             <h2 className="ui eight wide column">{hog.weight}</h2>
             <h2 className="ui eight wide column">{hog["highest medal achieved"]}</h2>
             <h2 className="ui eight wide column">{hog.greased}</h2>
             
         </div>
       :
          null

       }

          </div>
      
    
  

 }
    




export default Tile