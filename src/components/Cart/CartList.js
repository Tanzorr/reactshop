import React, {Component} from 'react';
import  CartItem from './CartItem'
import CartColums from "./CartColums";


export  default  function CartList({value}){

   const {cart} = value;
    console.log(value.cart);
    return(
        <div className="container-fluid mt-5">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value}/>
            })}
        </div>
    );

}