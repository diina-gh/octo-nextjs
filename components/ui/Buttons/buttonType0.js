import React, { useRef, useState } from "react";

export default function ButtonType0(props) {

  return (
    <div style={{marginRight: props.mr ? props.mr : 0 }} className='w-32 md:w-40 h-12 md:h-14 flex flex-row justify-center rounded-[8px] shadow-lg shadow-purple-600/10 text-base md:text-lg font-medium text-white gt-btn-type1 transition duration-700 ease-in-out cursor-pointer mr-2'>
        <div className='self-center'>{props.text}</div>
    </div>
  );
}
