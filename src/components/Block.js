import Button from "./Button";
import Radio from "./Radio";

const Block = (props)=>{
    return(
       <div>
        <Radio is={props.block.isRad} txtR={props.block.radio}/>
        <p>
            {props.block.p}
        </p>
        <Button txt={props.block.btn}/>
       </div>
    )
}
export default Block;