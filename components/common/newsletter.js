import React from 'react';

export default function Newsletter(props) {
        return (
            <section className="w-full py-16 px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-48 my-10">

                <div className='w-full h-72 gt-bg4 rounded-2xl'>
        
                <form className='w-full h-full flex flex-col justify-center rounded-2xl' method="post" onSubmit=''>
                    <div className="w-full bg-opacity-0 flex flex-col justify-center self-center" >
                        <div className="text-2xl md:text-4xl text-center font-normal nws-text text-gray-100">Abonnez-vous à notre newsletter</div>
                        <div className="text-lg text-center font-medium hidden lg:block nws-text text-gray-200 mt-1">Soyez les premiers informés de nos actualités, promotions, nouveaux services et conseils.</div>
                        <div className="w-full flex flex-row justify-center my-4 md:my-5">
                            <div className="ii-nsl w-6/7 md:w-1/2 h-12 md:h-14 bg-white opacity-100 shadow-xl rounded-md px-2 py-2 flex flex-row justify-center border-1 border-gray-200 border-opacity-40">
                                <div className="h-full w-5/7 md:w-3/4 2xl:w-5/6">
                                    <input className="h-full w-full px-4 text-tiny md:text-base border-0 ring-0" type="email" id="" name="" placeholder="Ecrire votre adresse email.." required />
                                </div>
                                <div className="h-full w-2/7 md:w-1/4 2xl:w-1/6 gt-btn-type1 cursor-pointer rounded-md opacity-100 flex flex-col justify-center">
                                    <button type="submit" className="text-center text-white text-tiny md:text-base">S'inscrire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
        
                </div>
    
          </section>
        );
}
