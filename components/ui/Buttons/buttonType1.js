import React, { useRef, useState } from "react";
import { ShoppingCartIcon } from '@heroicons/react/outline'

export default function ButtonType1(props) {

  return (
    <div style={{marginRight: props.mr ? props.mr : 0 }} className='w-52 md:w-56 h-12 md:h-14 flex flex-row justify-center rounded-md shadow-xl text-base md:text-lg font-medium text-white gt-btn-type1 cursor-pointer'>
        <div className="flex flex-row self-center">
            <ShoppingCartIcon className='h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 self-center mr-2' />
            <div className='self-center'>{props.text}</div>
        </div>
    </div>
  );
}
