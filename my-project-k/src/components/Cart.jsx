import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import './CartPage.css'

const Cart = () => {
     const [item,setItem]=useState([])
     const [total,setTotal]=useState()
     useEffect(()=>{
      loadItems();
     }, [])
      
     let totalPrice=0;
     const loadItems=async()=>{
      const result=await axios.get("http://localhost:3000/cart")
      setItem(result.data)
      result.data.map((prices)=>{
        totalPrice+=prices.qty * Number(prices.price.replace("₹",""))
      })
      setTotal(totalPrice.toFixed(2))
     }
    const deleteOrder= async(id)=>{
      let isDelete=window.confirm(
        "Are you sure? This item will be removed from your order!"
      )
      if(isDelete){
        await axios.delete(`http://localhost:3000/cart/${id}`)
        loadItems();
      }
    }
    const incDec=async(a,b,c,d,e)=>{
      if(c==="dec"){
        if(a===1){
          a = 1
        }else{
          a -= 1
        }
      }else{
        if(a===30){
          a= 30
          alert("quantity cannot Exceed 20!")
          return;
        }else{
          a += 1
        }
      }
      const order ={title:d,price:e,qty:a}
      await axios.put(`http://localhost:3000/cart/${b}`,order)
      loadItems()
    }

  return (
    <>

    <div className= "order-area">
      <div className="order-total">Your Order</div>
    </div>
    {item.map((items,index)=>(
    <div className="order-card" key={index}>
      <div className="order-item">
        {items.title}
         </div>
      <div className="order-qty">
        Qty <button className="qty-btn" onClick={()=> incDec(items.qty,items.id,"dec",items.title,items.price)}> - </button>
        <input type="text" className="qty-input"  value={items.qty}/>
        <button className="qty-btn" onClick={()=> incDec(items.qty,items.id,"inc",items.title,items.price)}> + </button>
      </div>
      <div className="order-price">₹{(items.qty * Number(items.price.replace("₹",""))).toFixed(2)}</div>
      <button className="delete-btn" onClick={()=>deleteOrder(items.id)}>Remove</button>
    </div>
    ))}
    <div className="order-total">
      <div className="total">Total</div>
      <div className="total-price">₹ {total}</div>
      <div className="place-order-btn">Place Order</div>
    </div>
    </>
  )
}

export default Cart