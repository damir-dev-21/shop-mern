import React, { Component } from "react";
import { useSelector } from "react-redux";

import { ProductCategory } from "./ProductCategory";

export const Products = ({products}) => {

    const product = useSelector(state=>state.products.filterProducts)

    return (
      <div className="products-screen">
        <div className="products-screen__body">
          {product.map((item, index) => {
            return (
              <ProductCategory
                nameCategory={item.category}
                products={item.products}
              />
            );
          })}
        </div>
      </div>
    );
  }

