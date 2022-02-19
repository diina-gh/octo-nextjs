import React, { useRef, useState } from "react";
import { HeartIcon } from '@heroicons/react/outline'

export default function ButtonType2(props) {

  return (
    <div style={{marginRight: props.mr ? props.mr : 0 }} className='w-52 md:w-56 h-12 md:h-14 flex flex-row justify-center rounded-md text-base md:text-lg text-white bg-gray-200 bg-opacity-20 border border-gray-400 border-opacity-50 cursor-pointer'>
        <div className="flex flex-row self-center text-gtpurple font-medium">
            <HeartIcon className='h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 self-center mr-2' />
            <div className='self-center'>{props.text}</div>
        </div>
    </div>
  );
}
