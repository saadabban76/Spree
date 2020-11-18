import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import './PageProduct.css';
import Ratings from '../Ratings';
import { useStateValue } from '../../StateProvider';

function Product(props) {
    const { product } = props;
    const [{}, dispatch] = useStateValue();

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

    return (
        <div className="product">
        <Link to={`/productDetails/${product._id}`}>
            <div className="product__info">
                <p className="product__name">{product.name}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{product?.price}</strong>
                </p>
            <div className="product__ratings">
            {
                // Array(ratings)
                // .fill()
                // .map(()=>(
                //    <p role="img">⭐</p>
                // ))
                <Ratings
                    rating={product?.rating}
                    numReviews={product?.numReviews}
                >
                </Ratings>
            }
            </div>
            </div>
            </Link>

            <img
                alt="product__image"
                className="product__image"
                src={product?.image}
            />

            <button className="product__button" onClick={addToBasket}>
                {/* <Link to='/cart' style={{color:'white'}}> */}
                    <span><ShoppingCartIcon style={{padding:'1px',marginTop:'3px'}} /></span>Add to Cart
                {/* </Link> */}
                </button>
        </div>
    )
}

export default Product
