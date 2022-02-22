
export default function ContactForm(props) {

  return (
    <form role="form" method="post">
        <div className="container p-0 text-base">
            <div className="w-full flex flex-row justify-between">
                <div className="ii-input2 input-deco">
                    <input className="rounded-xl border border-gray-600 shadow-inner w-full bg-white focus:bg-red-100 focus:bg-opacity-20 h-12 px-3" type="text" name="name" id="name" autoComplete="name" placeholder="Nom complet"/>
                </div>
                <div className="ii-input2 input-deco">
                    {/* <PhoneInput defaultCountry='SN' smartCaret={true} countryCallingCodeEditable={false} className='rounded-xl border border-gray-600 shadow-inner w-full focus:bg-red-100 focus:bg-opacity-20  h-12 px-3' placeholder="  Téléphone" value={this.state.telephone} onChange={(e) => this.setState({ telephone: e} )}/> */}
                    <input className="rounded-xl border border-gray-600 shadow-inner w-full focus:bg-red-100 focus:bg-opacity-20  h-12 px-3" type="number" name="telephone" id="telephone" autoComplete="telephone" placeholder="Téléphone"/>
                </div>
            </div>
            <div className="w-full input-deco flex flex-row justify-between mt-4">
                <input className="rounded-xl border border-gray-600 shadow-inner w-full focus:bg-red-100 focus:bg-opacity-20  h-12 px-3" type="email" name="email" id="email" autoComplete="email" placeholder="Adresse email"/>
            </div>
            
            <div className="w-full input-deco flex flex-row justify-between mt-4">
                <input className="rounded-xl border border-gray-600 shadow-inner w-full focus:bg-red-100 focus:bg-opacity-20  h-12 px-3" type="text" name="objet" id="objet" placeholder="Objet" />
            </div>
            

            <div className="input-deco w-full flex flex-row justify-between mt-4">
                <textarea className="w-full border border-gray-600 rounded-xl shadow-inner focus:bg-red-100 focus:bg-opacity-20 px-3 py-3" type="text" name="message" id="message" autoComplete="message" rows="5" placeholder="Votre message .." ></textarea>
            </div>

            <div className="mt-4">
                <button type="submit" className="ii-btn2 shadow-md transition duration-700 ease-in-out float-right">
                    ENVOYER
                </button>
            </div>
        </div>
    </form>

  );
}
