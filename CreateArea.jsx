import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Students from './Students';
import './CreateArea.css';


export default function Createarea() {
  let history=useNavigate();
  history('/');

  return (
   
            Students.map((item)=>{
              return(
                <div className="note" style={{background: "#fff",borderRadius: "7px",boxShadow: "0 2px 5px #ccc",
                  padding: "10px",width: "240px",margin: "16px", float: "left"}}>
    <h5>{item.fn} {item.n} </h5>
    <p>{item.em} </p>
    <p>{item.m} </p>
   
  </div>
              )
            }
            )
   
  )
}


