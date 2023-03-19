import {React,useState} from "react";

import Nav from "./Nav";
import Pigs from "./Pigs";
import HogFilter from "./HogFilter";
import Sort from "./Sort";



import hogs from "../porkers_data";

function App() {
	const[pigs,setHogs]=useState(hogs)
	const [greased,setGreased] = useState(false)
	const [sortBy,setSortBy] = useState("")
	//const [Sorted,setSort]= useState("")
	



	const filteredHogs= pigs
	.filter( (eachHog) => (greased ?eachHog.greased :true ))
	 .sort((a,b)=> {
		if(sortBy === "Weight")
		{return a.weight - b.weight}
		
		else if(sortBy === "Name"){
			//  pigs.sort((a,b)=>{
				return a.name.localeCompare(b.name) 
		}
	}
	  
    )
	
	console.log(filteredHogs)
	
	// function handleAppOps(e){
	// 	console.log(e.target.value)
	// 	setSort(e.target.value)

	// 	if(e.target.value === sort){
	// 		filteredHogs.sort()
	// 	}
	//  }
	
	// 	gs.filter((hog) => {if (name === hog.name){}}
	
		


	return (
	
		<div className="App">

			<Nav />
			<HogFilter hogsData ={pigs}  changeGreased={setGreased}/>
			
			<Sort hogsData={pigs}  sortFromApp = {sortBy} setSortBy={setSortBy}
			/>

			 <Pigs hogsData={filteredHogs}/> 
		</div>
	);
}

export default App

