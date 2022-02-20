import React, { useRef, useState } from "react";
import { BadgeCheckIcon, TruckIcon, ReplyIcon} from '@heroicons/react/solid'


export default function CardType0(props) {

  return (
    <div className="flex flex-row my-2 mr-1">

        <div className="w-7 h-7 xl:w-8 xl:h-8 flex flex-row justify-center bg-gray-200 bg-opacity-30 border border-gray-500 rounded-md self-center mr-2">
        
            {props.icon == 'badge'  &&
                <BadgeCheckIcon className="self-center h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5 text-gray-500" />
            }

            {props.icon == 'truck'  &&
                <TruckIcon className="self-center h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5 text-gray-500" />
            }

            {props.icon == 'return'  &&
                <ReplyIcon className="self-center h-3 w-3 md:h-4 md:w-4 xl:h-5 xl:w-5 text-gray-500" />
            }

        </div>

        <div className="w-28 self-center text-xs font-medium tracking-wide text-gtblack">{props.text}</div>

    </div>
  );
}
