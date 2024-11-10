import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl, endPoint } from "../api/api_url";
import axios from 'axios';

const Product = () => {
    let api = baseUrl + endPoint.items;  
    let [state, setState] = useState([]);
    let qty=1;
    const additem= async(a,b)=>{
        let isExisting=false;
        const result =await axios.get("http://localhost:3000/cart");
        if(result.data.length===0){
            const order={title:a,price:b,qty:qty}
            axios.post("http://localhost:3000/cart",order)
        }else{
            result.data.map((orderItem)=>{
                if(a===orderItem.title){
                    orderItem.qty+=1;
                    const order={
                        title:a,
                        price:b,
                        qty:orderItem.qty,
                    };
                    axios.put(`http://localhost:3000/cart/${orderItem.id}`,order)
                    isExisting=true;
                }
            })
            if(isExisting==false){
                const order ={
                    title:a,
                    price:b,
                    qty:qty,
                }
               axios.post("http://localhost:3000/cart",order)
            }
        }
    }

    const getFake = () => {
        axios.get(api)
            .then(res => {
                console.log(res);
                setState(res.data);
            })
            .catch(err => {
                console.log("Error:", err);
                if (err.response) {
                    console.log("Response Error:", err.response.data);
                    console.log("Status:", err.response.status);
                    console.log("Headers:", err.response.headers);
                } else if (err.request) {
                    console.log("Request Error:", err.request);
                } else {
                    console.log("General Error:", err.message);
                }
            });
    }

    useEffect(() => {
        getFake();
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                {state.map((product) => (
                    <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                        <div className="card" style={{ width: "18rem" }}>
                            <Link to={`/product/${product.id}`} style={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <img
                                    src={product.imgSrc}
                                    className="card-img-top"
                                    alt={product.title}
                                />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <button className="btn btn-primary mx-3">
                                    {product.price} ₹
                                </button>
                                <button className="btn btn-warning"
                                
                                onClick={()=>additem(product.title,product.price)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;