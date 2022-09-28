import React from "react";
import { ProductosContainer } from "./CardsProductosStyles";
import CardProducto from "./CardProducto";
import { useSelector } from "react-redux";

const CardsProductos = ({limit}) => {
  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  return (
    <ProductosContainer>
      {Object.entries(products).map(([, articles]) =>
        articles.map(
          articles => 
          {
            if (limit >= articles.id || selectedCategory) {
              return (
              <CardProducto
            id={articles.id}
            title={articles.title}
            img={articles.img}
            desc={articles.desc}
            price={articles.price}
          />  
              )
            }return null
          }
        )
      )
      }
    </ProductosContainer>
  );
};

export default CardsProductos;
