import Button from "./Button";
import Radio from "./Radio";

const Block = (props)=>{
    return(
       <div className="row" style={{width:400}}>
        <Radio is={props.block.isRad} txtR={props.block.radio}/>
        <p style={{color:"grey"}}>
            {props.block.p}
        </p>
        <Button txt={props.block.btn}/>
       </div>
    )
}
export default Block;