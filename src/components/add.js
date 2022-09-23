import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Add(){
  const [name, setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')

  const contacts=useSelector((state)=>state);
  const dispatch =useDispatch();
  const navigate= useNavigate();

  const checkEmail= contacts.find(
    (contact)=>contact.email===email && contact
    );
    const checkNumber=contacts.find(
    (contact)=>contact.phone===parseInt(phone)
    );
    // console.log(checkEmail)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if( !email || !phone || !name){
        return toast.warning("please fill in all fields");
    }
    if(checkEmail){
        return toast.error("this email already Exists!");
    }
    if(checkNumber){
        return toast.error("This number already Exists!");
    }

    const data={
        id :contacts[contacts.length-1].id +1,
        name,
        email,
        phone

    }
    console.log(data)
    dispatch ({type:"ADD_CONTACT",payload:data})
    toast.success("successfully complited")
    navigate("/");
  };
  return (
    <div className='container'>
         <h2 className='display-3 my-5 text-center'>add Contact</h2>
            <div className='row'> 
                  
                <div className='col-md-6 shadow text-center mx-auto p-5'>
                   <form onSubmit={handleSubmit}> 
                    <div className="form-group mb-3">
                        <input type="text" className="form-control"  placeholder="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="number" className="form-control" placeholder="phone number" value={phone} onChange={e=>setPhone(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" placeholder="add student" className="btn btn-block btn-dark form-control" />
                    </div>
                   </form>
                </div>
            </div>
        </div>
  );
}

export default Add;
