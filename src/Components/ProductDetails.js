import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from './ProductContext';

const ProductDetails = () => {
    const {id} = useParams()

    //importing Product array
const product = useContext(ProductContext)


//finding the exact product

const theProduct = product.find((item) => {
    return item.id === parseInt(id)
})
console.log(theProduct)


    return (
        <div className='h-screen py-14 md:flex md:p-[80px] border border-gray-400 drop-shadow-lg p-3'>
            <div className='h-3/5 md:h-full flex justify-center items-center md:w-full' >
                <img className='h-[300px] md:h-[400px]' src={theProduct.image} alt="" />
            </div>
            <div className='px-8 flex flex-col gap-4 justify-center'>
                <div className='font-bold'>{theProduct.title}</div>
                <div className='text-sm '>{theProduct.description}</div>
                <div className='font-bold'>${theProduct.price}</div>            </div>
        </div>
    );
};

export default ProductDetails;