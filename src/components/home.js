import { React } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home=()=>{
    const contacts=useSelector(state=>state)
    const dispatch=useDispatch();

    const deleted=(id)=>{
      dispatch({type:"DELETE_CONTACT",payload:id})
toast.success("deleted succesfully")
    }
    return(
        <div className='container my-5 '>
            <div className='row'>
                {/* <div className='col-md-12 my-5 text-center'>
                    <Link to="/add" className="btn outline-dark">add Contact</Link>
                </div> */}
                <div className='col-md-8 mx-auto text-center'>
                <table className="table table-hover">
  <thead className='table-dark'>
    <tr>
     
      <th scope="col">#</th>
      <th scope="col">firstName</th>
      <th scope="col">lastName</th>
      <th scope="col">Handle</th>
      <th scope="col">action</th>
      
    </tr>
  </thead>
  <tbody>
    {
    //   users && users.length > 0 
    //   ?
    // users.map((item,index)=>(
        contacts.map((contact,id)=>(
        <tr key={id}>
        <th scope="row">{id +1}</th>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td >
          {/* <button className='btn bg-info mx-2 px-4' style={{color:"white"}} onClick={()=>{ alert(item.id)}}>Edit</button>
          <button className=' btn bg-danger mx-2 px-4' style={{color:"white"}} remove={item.id} onClick={handleDelete} >Delete</button> */}
           <Link className='btn bg-info mx-2 px-4' style={{color:"white"}} to={`/edit/${contact.id}`}>Edit</Link>
          {/* <Link className=' btn bg-danger mx-2 px-4' style={{color:"white"}}to={`/delete/${contact.id}`} >Delete</Link> */}
          <button className=' btn bg-danger mx-2 px-4' style={{color:"white"}} onClick={()=>deleted(contact.id)}>Delete</button>
        </td>
        </tr>
      ))
   
    }
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    )
    }

export default Home;