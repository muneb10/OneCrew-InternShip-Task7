import { forwardRef, useImperativeHandle } from "react"
import { useRef } from "react";
const GreetingCardModal = forwardRef(function GreetingCard({name,ocassion},ref) {

    const dialog=useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    return( 
        <dialog ref={dialog} className="bg-blue-600 p-10 bg-opacity-100 modal h-[30vh] w-[30vw] rounded-lg">
            <div className="flex justify-center items-center flex-col text-white">
            <h2 className="uppercase font-bold text-xl ">Happy {ocassion} {name}</h2>
            <form method="dialog" className="flex justify-center mt-4" >
                <button className="w-[10vw] border-none p-2 rounded-xl bg-yellow-400 font-bold text-white ">Close</button>
            </form>
            </div>
        </dialog>
    )

});

export default GreetingCardModal;