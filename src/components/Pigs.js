import Tile from "./Tile"


function Pigs({hogsData}){ 
    
    return(<div> {hogsData.map(hog => <Tile  hog={hog}/> 
    )}     </div>)
    
  
         
       

}

export default Pigs

