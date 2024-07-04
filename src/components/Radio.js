const Radio = (props)=>{
    return(
        
    <div>
    {props.txtR.map((txt,ind)=>{
        return(
          <div key={ind} className="form-check">
            <input  key={ind} className="form-check-input" name={"ia"} type={props.is?"radio":"checkbox"} /> {txt}
        </div>  
        )
    })}
        
    </div>

        
    )
}
export default Radio;