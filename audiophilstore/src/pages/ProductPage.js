import React from 'react';
import Product from '../components/Product';
import styled from 'styled-components';

function ProductPage() {
    return (
        <ProductPageStyle>

        <div>
            <Product />
        </div>

        <div className="product-modal">

        </div>

        </ProductPageStyle>
    )
}



export default ProductPage
