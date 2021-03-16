import React from 'react';
import {deleteProductById} from '../actions/product';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class ProductListItem extends React.Component{

     specificProduct= () => {
        console.log(this.props);
        localStorage.setItem('currentProductId',this.props.product._id);
        this.props.history.push('/product');
     }
      deleteProduct(_id){
         console.log("I stay here");
         console.log(_id);
         this.props.deleteProductById(_id);
      }
    render(){
        let product=this.props.product;
        return(

            <li onClick={this.specificProduct}>{product.product_name} {product.price} <img src={product.product_image}></img> <button onClick={(event) => {
                this.deleteProduct(product._id);
                event.stopPropagation();
            }} className="btn btn-danger">Delete</button></li>
        )

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteProductById},dispatch)
   }
   export default connect(null,mapDispatchToProps)(ProductListItem);