import React from 'react';
import './FashionPage.css';
import data from '../productData';
import PageProduct from './Products/PageProduct';

function FashionPage() {
    return (
        <div>
            <main>
                <div>
                    <div className='row center'>
                        {data.products.map((product)=>(
                            <PageProduct key = {product.id} product={product} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FashionPage
