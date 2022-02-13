import React from 'react';
import Link from 'next/link'
import { UserIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline'



export default function Product(props) {
    return (
        <Link  href={'/detail/' + props.product.id}>
        <div key={props.product.id}  className="w-full pt-5 pb-14 rounded-xl bg-gray-400 bg-opacity-30 cursor-pointer">

            <div className='w-full h-64 flex flex-row justify-center'>
                <div className='p-image self-center'>
                    <img src={props.product.image} />
                </div>
            </div>

            <div className='w-full mt-1 px-8'>
                <div className='w-full text-gray-400 text-xs font-medium'>{props.product.category}</div>
                <div className='w-full flex flex-row justify-between mt-2'>
                    <div className='self-center w-2/3'>
                        <div className='w-full text-gray-100 text-xl font-semibold'>{props.product.name}</div>
                        <div className='w-full text-gray-100 text-lg font-medium mt-1'>{props.product.price}</div>
                    </div>
                    <div className="w-14 h-14 rounded-full flex flex-row justify-center cursor-pointer gt-btn-type1 mr-2 self-center">
                        <Link  href={'/'} >
                            <ShoppingCartIcon className="h-6 w-6 text-white self-center"/>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </Link>
    );
}
