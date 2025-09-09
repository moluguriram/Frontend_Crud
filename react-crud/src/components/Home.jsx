import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import {Link} from "react-router-dom"

const Home = () => {
    let[user,setUser] = useState([]);

    useEffect(async()=>{
        async function fetchData() {
        let data1= await axios.get("http://localhost:8082/users")
        console.log(data1);
        let {data} = data1
        console.log(data);
        setUser(data)
    }
    fetchData()

    },[]);
    //code for delete data
    let deleteData=(id)=>{
        console.log(id);
        if(window.confirm("do you want to delete the data")){
            axios.delete(`http://localhost:8081/users/${id}`)
            .then(()=>{
                console.log("data is deleted");
                window.location.reload()
                
            })
            .catch(()=>{
                console.log("data is not deleted");
                
            })
        }
        
    }
//code for Edit data

let editData=(id)=>{
    console.log(id);
    
}
  return (
<main id="main">
      <Link to="/create">
          <button className="btn edit-btn main1" >create new users</button>
      </Link>
    <div id="sub-main">
      {
            user.map((value , index)=>{
                console.log(value.name);
                let img=`https://api.dicebear.com/9.x/lorelei/svg?seed=${value.name}`
                 return (
                    <Fragment key={index}>
                             <div className="user-card">
                         
            --+             <img src={img} className="card-img-top" alt="..." />                      
                          <div class="card-body">
                          <h5 class="card-title">Name :{value.name} </h5>
                         <p class="card-text">Id :{value.id}</p>
                         <p class="card-text">Phone :{value.phone}</p>
                         <p class="card-text">Website :{value.website}</p>
                         <p class="card-text">Email :{value.email}</p>
                         <p class="card-text">Street :{value.address.street}</p>
                          <p class="card-text">City :{value.address.city}</p>
                           <p class="card-text">Zipcode :{value.address.zipcode}</p>
                            <Link to={`/edit/${value.id}`} ><button className="btn edit-btn" >Edit</button></Link>       
                              <button className="btn delete-btn" onClick={()=>{deleteData(value.id)}}>Delete</button> 
                        </div>
                         </div>
                     </Fragment>
                )
            })
        }
    </div>
    </main>
  )
 }


export default Home