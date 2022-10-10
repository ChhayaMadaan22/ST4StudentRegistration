import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Students from "./Students";
import "./Form.css";
import stud from "./student.png";


 export default function Form() {
  const [firstname, setfirstname] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let fn = firstname, n = name, em = email,m=mobile;
    Students.push({ fn,n,em,m });
    // console.log(Students);
    history('/create');


  }
  return (
    <div class="wrapper">
    <form class="form">
   
      <div class="pageTitle title">Student Registration Form </div>
      
      <input type="text" class="name formEntry"  name="name1" placeholder=" First Name" onChange={(e) => setfirstname(e.target.value)} required/>
      <input type="text" class="name formEntry"   name="name2" placeholder="Last Name" onChange={(e) => setname(e.target.value)} required />
      <input type="text" class="email formEntry" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required/>
      <input type="number" maxLength={10} name="mobile" class="name formEntry" placeholder="Mobile" onChange={(e) => setmobile(e.target.value)} required/>  
      <Link to='/added' style={{textDecoration:"none"}} >
          <input className='btn submit formEntry' type="submit" onClick={handleSubmit}></input>
        </Link>
      
    </form>
    
  </div>
  )
}