import React, { useEffect } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './ProductDetails.css';
import data from '../productData';
import Ratings from './Ratings';
import { Link, withRouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function ProductDetails(props) {

const [{}, dispatch] = useStateValue();

    useEffect(() => {
        dispatch(
            {
                type:'ALL_PRODUCTS',
                products:{
                    id:product._id,
                    name:product.name,
                    image:product.image,
                    price:product.price,
                    ratings:product.rating
                }
            }
        )
    }, [dispatch]);

    const addToBasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:product._id,
                name:product.name,
                image:product.image,
                price:product.price,
                ratings:product.rating
            }
        })
    }

    const product = data.products.find((item) => item._id === props.match.params.id);
    console.log(product);
    if(!product){
        <div>Product Not Found !!!</div>
    }
    return (
    <div className="productDetails center">
        <div className='productDetails__col1'>
            <div className='productInfo__row1'>
                <span className='product__brand'>{product.brand}</span>
                <h2 className='product__name'>{product.name}</h2>
                <span style={{fontWeight:'630',color:'black'}}>Model : <span style={{fontWeight:'300'}}>BT1-6534</span></span>
                <span style={{fontWeight:'630',color:'black',marginLeft:'15px'}}>SKU : <span style={{fontWeight:'300'}}>7687657</span></span>
                {
                    <Ratings
                        rating={product.rating}
                        numReviews={product.numReviews}
                    >
                    </Ratings>
                }
            </div>

            <div className='productInfo__row2'>
            <img
                alt={product.name}
                className="product__image" 
                src={`.${product.image}`}
            ></img>
            </div>
        </div>
        <div className='productDetails__col2'>
            <div className='productReview__row1'>
                <div>
                <span className='product__priceMatch'><i class="fas fa-ribbon"></i>Price Match Guarantee</span>
                <h1>${product.price}</h1>
                </div>

                <div className='productReturn__box'>
                    <span><i class="fas fa-exchange-alt"></i> EXTENDED HOLIDAY RETURN PERIOD</span>
                </div>
                    <h4><span style={{color:'red'}}>Hot offer : </span>Save %50 discount on purchase</h4>
            </div>

            <div className='productReview__row2'>
                <h4>Shipping : {product.shipping ? <span style={{color:'green'}}>Available</span> : <span style={{color:'red'}}>Unavailable</span>}</h4>
                <h4>Store Pickup : <span>Pick up in an hour at los angeles</span></h4>
                <h4>Act Fast : 
                {product.countInStock>0 ? <span> {product.countInStock} In Stock </span> : <span style={{color:'red'}}>OUT OF STOCK</span>}
                </h4>
            </div>
                <button className="product__button" onClick={addToBasket}>
                <Link to='/cart' style={{color:'white'}}>
                    <span><ShoppingCartIcon style={{padding:'1px',marginTop:'3px'}} /></span>Add to Cart
                </Link>
            </button>        
        </div>
    </div>
    )
}

export default withRouter(ProductDetails)
