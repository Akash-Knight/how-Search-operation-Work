// import React from 'react'

function ProductList({ products = [] }) {
    if (products.length === 0) {
        return <p>No products found</p>;
    }
    return (
        <div className=" flex justify-center  h-screen ">
            <ul className=" grid space-x-28  grid-cols-4 m-10">

                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} width={100} />
                        <p>Name:{product.name}</p>
                        <p>Original Price: {product.originPrice}</p>
                        <p>Discount: {product.discount}%</p>
                        <p>Final Price: {product.finalPrice}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default ProductList;
