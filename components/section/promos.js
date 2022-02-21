import React, { useRef, useState } from "react";
import BadgeType0 from "../ui/Badges/badgeType0";
import ButtonType0 from "../ui/Buttons/buttonType0";
import ButtonType4 from "../ui/Buttons/buttonType4";

export default function Promos(props) {

  return (

    <section className="flex justify-center px-7 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 my-5  md:my-10">

        <div className="flex flex-col md:flex-row-reverse justify-between items-center">

            <div className="w-full md:w-5/12 flex-auto">
                <img className="w-full float-right mt-5 md:mt-0" src={props.image} />
            </div>

            <div className="w-full md:w-7/12 flex-auto mt-4 md:mt-0">
            
                <div className="sm:text-center lg:text-left">

                    <BadgeType0 text="Nouveauté" />

                    <h1 className="w-full text-2xl sm:text-4xl md:text-6xl tracking-tight font-semibold text-gray-900 mt-8">
                        <span className="block xl:inline">{props.title}</span>
                    </h1>

                    <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">{props.description}</p>
                    
                    <div className="mt-6 sm:mt-10 flex flex-row justify-start">
                        <ButtonType0 text="Commander" mr='8px' />
                        <ButtonType4 text="Voir +" />
                    </div>

                </div>

            </div>


        </div>

    </section>

  );
}
