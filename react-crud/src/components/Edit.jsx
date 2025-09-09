import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

      let[user , setUser] = useState();
      let[id , setId] = useState();
      let [email , setEmail] = useState();
      let [phone , setPhone] = useState();
      let [website , setWedsite] = useState();
      let [street , setStreet] = useState();
      let [city , setCity] = useState();
      let [zipcode , setZipCode] = useState();
      let [company , setCompany] = useState()
      let [address , setAddress] = useState();
    
        let{userid}=useParams();
        console.log(userid);
        
    let navigate= useNavigate()
        //reading data
        useEffect(()=>{
            axios.get(`http://localhost:8081/users/${userid}`)
            .then((data1)=>{
                console.log(data1);
                let {data}=data1

                setUser(data.name)
                setId(data.id)
                setEmail(data.email)
                setPhone(data.phone)
                setWedsite(data.website)
                setStreet(data.address.street)
                setCity(data.address.city)
                setZipCode(data.address.zipcode)
                setCompany(data.address.company)
                
            })
            .catch(()=>{
                console.log("data is not fetched");
                
            })
        }, [])


        //update the data


        let updateData=(e)=>{
            e.preventDefault()
            let payload = {
       "name" : user,
        id,
        email,
        phone,
        website,
        "address": {
          street,
          city,
          zipcode,
          company
        }
      }
            axios.put(`http://localhost:8081/users/${userid}`,payload)
            .then(()=>{
                console.log("data updated");
                navigate("/")   
                
            })
            .catch(()=>{
                console.log("data is not updated");
                
            })
        }
  return (
    <div>
        <form action="">
        <label htmlFor="name">Name: </label>
        <input type="text" value={user} name="name" id="name" onChange={(e) => {setUser(e.target.value)}} />
        <br /><br />
        <label htmlFor="id">Id: </label>
        <input type="number" value={id} name="id" id="id" onChange={(e) => {setId(e.target.value)}} />
        <br /><br />
        <label htmlFor="emial">Email: </label>
        <input type="email" value={email} name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
        <br /><br />
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="Phone" value={phone} id="Phone" onChange={(e) => {setPhone(e.target.value)}} />
        <br /><br />
        <label htmlFor="website">WebSite: </label>
        <input type="text" name="website" value={website} id="website" onChange={(e) => {setWedsite(e.target.value)}}/>
        <br /><br />
        <label htmlFor="street">Street: </label>
        <input type="text" name="street" value={street} id="street" onChange={(e) => {setStreet(e.target.value)}} />
        <br /><br />
         <label htmlFor="city">City: </label>
        <input type="text" name="city" value={city} id="city" onChange={(e) => {setCity(e.target.value)}} />
        <br /><br />
         <label htmlFor="zipcode">ZipCode: </label>
        <input type="text" name="zipcode" value={zipcode} id="zipcode" onChange={(e) => {setZipCode(e.target.value)}} />
        <br /><br />
         <label htmlFor="company">Company: </label>
        <input type="text" name="company" value={company} id="company" onChange={(e) => {setCompany(e.target.value)}} />
        <br /><br />
        <button onClick={updateData} >Update</button>
      </form>
    </div>
  )
}

export default Edit