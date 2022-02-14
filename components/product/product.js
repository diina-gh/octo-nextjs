import React from 'react';
import Link from 'next/link'
import { UserIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline'



export default function Product(props) {
    return (
        // <Link  href={'/detail/' + props.product.id}>
        <div key={props.product.id}  className="w-full pt-2 md:pt-5 pb-8 md:pb-14 rounded-xl bg-gray-400 bg-opacity-30 cursor-pointer">

            <div className='w-full h-32 md:h-64 flex flex-row justify-center'>
                <div className='p-image self-center'>
                    <img src={props.product.image} />
                </div>
            </div>

            <div className='w-full mt-1 px-3 md:px-8'>
                <div className='w-full text-gray-400 text-xs font-medium'>{props.product.category}</div>
                <div className='w-full flex flex-row justify-between mt-1 md:mt-2'>
                    <div className='self-center w-2/3'>
                        <div className='w-full text-gray-100 text-sm sm:text-xl font-semibold truncate'>{props.product.name}</div>
                        <div className='w-full text-gray-100 text-xs md:text-lg font-medium mt-1'>{props.product.price}</div>
                    </div>
                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-full flex flex-row justify-center cursor-pointer gt-btn-type1 self-center">
                        {/* <Link  href={'/'} > */}
                            <ShoppingCartIcon className="h-4 w-4 md:h-6 md:w-6 text-white self-center"/>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            
        </div>
        // </Link>
    );
}
