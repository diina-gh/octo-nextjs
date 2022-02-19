import React, { useRef, useState } from "react";

export default function Console(props) {

  return (
    <div className="h-7 flex flex-row self-center">
        <div className="h-full w-7 flex flex-row justify-center border border-gray-800 rounded-md gt-shadow1 btn-effect1 cursor-pointer mr-1">
            <div className="self-center text-lg font-semibold text-gray-800">-</div>
        </div>
        <div className="h-full w-12 h-7 self-center">
            <input type="number" min={0} defaultValue={1} className="border-0 focus:ring-0 w-full h-full text-center text-base font-medium bg-gray-100 bg-opacity-20 text-gray-800 shadow-inner"/>
        </div>
        <div className="h-full w-7 flex flex-row justify-center border border-gray-800 rounded-md gt-shadow1 btn-effect1 cursor-pointer ml-1">
            <div className="self-center text-lg font-semibold text-gray-800">+</div>
        </div>
    </div>
  );
}
