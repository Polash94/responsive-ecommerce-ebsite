import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import Item from './Item';

const Product = () => {

    const product = useContext(ProductContext)
    console.log(product)


    return (
        <div>
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {product.map((item) => {
                            return <Item item={item}></Item>
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;