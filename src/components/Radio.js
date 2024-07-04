const Radio = (props)=>{
    return(
        
    <div>
    {props.txtR.map((txt,ind)=>{
        return(
          <div key={ind} className="form-check">
            <input  key={ind} className="form-check-input" type={props.is?"radio":"checkbox"} value="" id="flexCheckDefault"/> {txt}
        </div>  
        )
    })}
        
    </div>

        
    )
}
export default Radio;