import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import ProductsContext from '../contexts/ProductsContext';

const Products = () => {

  const {products, setProducts} = useContext(ProductsContext);


  return (
    <>
      <section className="products container">
        <article>
          {products.map(product => {
            return (
              <div key={product.id} className="item">
                <Link to={`/single/${product.id}`}>
                  <img src={`http://localhost:3000/${product.img}`} alt="" />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </Link>
              </div>
            )
          })}

        </article>
      </section>

    </>
  )
}

export default Products;