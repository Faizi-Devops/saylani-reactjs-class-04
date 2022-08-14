import "./style.css";
import { useState } from "react";


let Form  = () =>{
    let [name,setName]=useState();
    let [clase,setClase]=useState();
    let [roll,setRoll]=useState();
    let [batch,setbatch]=useState();
    let onChangeName= (e) =>{
        setName(e.target.value)

    } 
    let onChangeClase = (e) =>{
        setClase(e.target.value);
        
    }
    
let onChangeRoll =(e)=>{
    setRoll(e.target.value)

}
let onChangeBatch =(e)=>{
    setbatch(e.target.value);
}
let onGetData = () =>{
    let student = {
        Name:name,
        Class:clase,
        RollNumber :roll,
        BatchNo:batch,
    }
    console.log(student);

}
    
    return(
        <div>
            <div>form handling data get within console</div>
            <input type="text" className="form-control AA" onChange={onChangeName} placeholder="Please enter your name"></input><br />
            <input type="text" className="form-control AA" onChange={onChangeClase} placeholder="PLeasse enter your class"></input><br />
            <input type="number" className="form-control AA" onChange={onChangeRoll} placeholder="Please enter your roll number"></input><br />
            <input type="number" className="form-control AA" onChange={onChangeBatch} placeholder="Please enter your batch"></input><br />
            <button type="button" class="btn btn-primary" onClick={onGetData}>Click me!</button>

        </div>
    )
}
export default Form;