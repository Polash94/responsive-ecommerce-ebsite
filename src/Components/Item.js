import React, { useContext } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import CartContext from './CartContext';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

const {addToCart} = useContext(CartContext)


    return (
        <div key={item.id}>
            <div  className=''>
                <div className='bg-white-200 border border-gray-400 rounded w-full h-[300px] relative group overflow-hidden'>
                    {/* images cart */}
                    <div className='w-full h-full overflow-hidden group'>

                        <Link to={`/product/${item.id}`} className='w-[200px] cursor-pointer h-full flex justify-center items-center mx-auto'>
                            <div className='flex justify-center items-center'>
                                <img
                                    className='max-h-[160px] group-hover:scale-110 transition duration-300 '
                                    src={item.image} alt={item.title} />
                            </div>
                        </Link>
                        
                    </div>
                    {/* Buttons*/}

                    <div className='absolute top-5 -right-8 z-10 group-hover:right-0 p-2 opacity-0 group-hover:opacity-100 duration-300 flex flex-col gap-y-2 drop-shadow-lg'>
                        <button>
                            <div onClick={()=>addToCart(item,item.id)}  className='text-white bg-red-600 flex items-center justify-center h-10 w-10'>
                                <AiOutlinePlusSquare className=' text-2xl'></AiOutlinePlusSquare>
                            </div>
                        </button>

                        <Link to={`/product/${item.id}`} className='h-10 w-10 text-black bg-white flex justify-center items-center'>
                            <AiFillEye></AiFillEye>
                        </Link>
                    </div>

                </div>
                {/* Category and Title */}
                <div className='capitalize text-gray-400 text-sm'>{item.category}</div>
                <Link to={`/product/${item.id}`} className='text-sm md:text-lg font-semibold cursor-pointer hover:scale-105 duration-300'>{item.title}</Link>
                <div className='font-bold'>${item.price}</div>
            </div>
        </div>
    );
};

export default Item;