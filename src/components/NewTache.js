import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Radio from "./Radio";
import Button from "./Button";
import Select from "./Select";

export default function NewTache(props) {

    
        return(
        <div className="row">
            <h2>Nouvelle Tache</h2>
            <div className="col-12">
                <Input txt="tache"/>
                <TextArea/>
               
            <div className="grid-container ">
                 <p>data de fin</p>
                <Select main="jour" nb={31}/>
                <Select main="mois" nb={12}/>
                <Select main="annee" nb={2025}/>
            </div>
            <div  className="grid-container">   
                 <p className="p">propiéter</p>
                 <Radio is={props.newT.isRad} txtR={props.newT.radio} />  
            </div> 
             <Button txt={props.newT.btn}/>
        </div>

        </div>
    )
    


}