import React from "react";
import process1 from "../../images/howworks.gif";
import process2 from "../../images/ewasteprocess.jpg";
import process3 from "../../images/process1.gif";
function Process(){
    return(
        <div className="alert alert-primary" role="alert" >
        <div style={{height:"50px"}}></div>
        <h1>This is Process component</h1>
        <img src={process2} className="d-block w-99 mx-auto" alt="..." height={500} />
        <img src={process3} className="d-block  mx-auto" alt="..." height={500}/>
        <img src={process1} className="d-block w-99 mx-auto" alt="..."/>
        </div>
    )
}
export default Process;