function HogFilter({changeGreased}){
    // const eachHog = hogsData.map((greasedny) => greasedny)
    //console.log(eachHog)

    function handleChange(e){
//    const filteredHogs= hogsData.filter( (eachHog) => { debugger;
    
//     return e.target.value === eachHog.greased.toString()
//     })
   console.log(e.target.value)
   
   const boolyValue = (e.target.value === "true")
   console.log("boolyValue " + boolyValue)
   changeGreased(boolyValue)

         
    }

   

   return <select name="filter" onChange={handleChange}>
        <option value={false}>ALL</option>
        <option value={true}>greased</option>
    </select>

}

export default HogFilter