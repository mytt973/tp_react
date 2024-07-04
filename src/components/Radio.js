const Radio = (props)=>{
    return(
        
    <div>
    {props.txtR.map((txt,ind)=>{
        return(
          <>
          { props.is? "":<br/>}
            <input  key={ind} className="form-check-input" name={"ia"} type={props.is?"radio":"checkbox"} /> {txt}
        </>  
        )
    })}
        
    </div>

        
    )
}
export default Radio;