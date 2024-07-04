const Radio = (props)=>{
    return(
        
    <div className={props.is?"grid-container radio":""}>
    {props.txtR.map((txt,ind)=>{
        return(
          <div key={ind} >
         
            <input  key={ind} className="form-check-input" name={"ia"} type={props.is?"radio":"checkbox"}  /> {txt} 
           
        </div>  
        )
    })}
        
    </div>

        
    )
}
export default Radio;