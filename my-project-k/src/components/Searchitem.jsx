import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useParams } from 'react-router-dom';
import { baseUrl, endPoint } from '../api/api_url';

const Searchitem = () => {
  console.log(useParams)
  let item = baseUrl+endPoint.items
  const {term} = useParams()
  const [filterData, setFilterData]=useState([])

  useEffect(()=>{
    const filterData = ()=>{
      const data = item.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
      console.log(data)
      setFilterData(data)
    }   
      filterData()

  }, [term])
  
 
 


  return (
    <div>
       <Product item={filterData}></Product>
       <h1>raj</h1>
       </div>
       
       
  )

}

export default Searchitem