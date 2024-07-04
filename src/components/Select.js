function Select  (props){
     let arr=[];
    const test=props.main==="annee";
    for (let i = test?1945:1; i <= props.nb; i++) {
    arr.push(i)
     }

    return(
<div>
<select className=" form-select form-select-sm" aria-label=".form-select-sm example">
  <option defaultValue={true}>{props.main}</option>
        {arr.map((i,index)=>{
            return(
                <option key={index}>{i}</option>
            )
        })}
</select>
</div>
    )
}
export default Select;