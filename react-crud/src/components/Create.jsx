import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

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

  let navigate = useNavigate()

  let fetchData = (e) => {
      e.preventDefault()
      console.log(user , id);
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
      
      axios.post("http://localhost:8081/users",payload)
      .then(() => {
        console.log("data created");
        navigate("/")
      })
      .catch(() => {
        console.log("data is not created");
        
      })

  }

  return (
    <div>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={(e) => {setUser(e.target.value)}} />
        <br /><br />
        <label htmlFor="id">Id: </label>
        <input type="number" name="id" id="id" onChange={(e) => {setId(e.target.value)}} />
        <br /><br />
        <label htmlFor="emial">Email: </label>
        <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
        <br /><br />
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="Phone" id="Phone" onChange={(e) => {setPhone(e.target.value)}} />
        <br /><br />
        <label htmlFor="website">WebSite: </label>
        <input type="text" name="website" id="website" onChange={(e) => {setWedsite(e.target.value)}}/>
        <br /><br />
        <label htmlFor="street">Street: </label>
        <input type="text" name="street" id="street" onChange={(e) => {setStreet(e.target.value)}} />
        <br /><br />
         <label htmlFor="city">City: </label>
        <input type="text" name="city" id="city" onChange={(e) => {setCity(e.target.value)}} />
        <br /><br />
         <label htmlFor="zipcode">ZipCode: </label>
        <input type="text" name="zipcode" id="zipcode" onChange={(e) => {setZipCode(e.target.value)}} />
        <br /><br />
         <label htmlFor="company">Company: </label>
        <input type="text" name="company" id="company" onChange={(e) => {setCompany(e.target.value)}} />
        <br /><br />
        <button onClick={fetchData} >submit</button>
      </form>
    </div>
  )
}

export default Create
