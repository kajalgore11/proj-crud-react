import React,{ useEffect ,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link,useNavigate,useParams}from 'react-router-dom'
import { toast } from 'react-toastify'


function Edit(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')

    const {id}= useParams()
    const contacts=useSelector(state=>state);

    const currentEdit= contacts.find(contact=>{
     return contact.id === parseInt(id)
    });
    useEffect(()=>{
        if(currentEdit){
        setName(currentEdit.name)
        setEmail(currentEdit.email)
        setPhone(currentEdit.phone)
}
},[currentEdit]);

 // const checkEmail=contacts.find(
    //     (contact)=> contact.id !==parseInt(id) && contact.email === email
    // );
const checkNumber=contacts.find(
    (contact)=>contacts.id !==parseInt(id) && contact.phone ===parseInt(phone)
    );
const handleSubmit=(e) =>{
   e.preventDefault();
     
        if(!name || !email || !phone){
        return toast.warn("please fill in all fields!");
    }
    if(checkNumber){
        return toast.error("this number already exists!");
    }

    const  data={
        // id:contacts[contacts.length-1].id +1,
        id:parseInt(id),
        name,
        email,
        phone
    }
    dispatch({type:"UPDATE_CONTACT",payload:data});
    navigate("/")
    
}

    return(
        <div className='container'>
            {currentEdit ? (
            <>
            <h2 className='display-4 text-center my-4'>Edit Contacts</h2>
            <div className='row'>
            <form onSubmit={handleSubmit}>
            <div className='col-md-6 text-center mx-auto shadow p-5 ' >
                
                <div className='from-group my-4'>
                    <input type='text' className='form-control' placeholder='user Name' value={name} onChange={e =>setName(e.target.value)} />
                </div>
                <div className='from-group my-4'>
                    <input type='email' className='form-control' placeholder='Enter email' value={email} onChange={e =>setEmail(e.target.value)} />
                </div>
                <div className='from-group my-4'>
                    <input type='number' className='form-control' placeholder='******' value={phone} onChange={e =>setPhone(e.target.value)} />
                </div>
                <div className='from-group my-4'>
                    <input type='submit' className='btn btn-dark' value="Update" />
                    <Link to="/" className=' bg-danger mx-4 p-2 text-white' style={{ border:"1px solid black" ,borderRadius:"9px" ,padding:"100px"}}>Cancel</Link>
                    </div>
            </div>
            </form>
            </div>
            </>
            ):(
                <h2 className='display-4 text-center my-4'>Edit Contacts id {id} is not found</h2>
            )}
        </div>
        
    )
}

export default Edit;