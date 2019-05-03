import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";


const ProductContext = React.createContext();



  class ProductProvider extends Component {
      state={
          products: storeProducts,
          detailProduct:detailProduct
      }

      hendleDetail =()=>{
          console.log('hello from deteil');
      }

      addToCart =()=>{
          console.log('hello from add to cart');
      }
    render(){
        return(
          <ProductContext.Provider value={{
              ...this.state,
              hendleDetail: this.hendleDetail,
              addToCart: this.addToCart,
          }}>
              {this.props.children}
          </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

  export {ProductProvider,ProductConsumer};