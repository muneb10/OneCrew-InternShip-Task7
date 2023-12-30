
import { useRef, useState } from 'react';
import GreetingCardModal from '../components/GreetingCard';
const Input = () => {
    
   
    const [name,setName] = useState("");
    const [ocassion,setOcassion] = useState("");

    const dialog = useRef();
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleOcassion = (event) => {
        setOcassion(event.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        dialog.current.open();
    }
    return (
        <>
            
            <div className="h-screen bg-blue-400 flex justify-center items-center ">
                <form onSubmit={handleClick} className="h-1/2 flex flex-col justify-center items-center gap-4 border-[3px] border-white p-10 rounded-lg bg-blue-600">
                <a href="https://fontmeme.com/outline-fonts/"><img src="https://fontmeme.com/permalink/231129/00ee9ccbc4757a9418a14c3f4c70410f.png" alt="outline-fonts" border="0"/></a>
                    <input onChange={handleName}  placeholder="Enter Recipient Name" className="placeholder:font-bold placeholder:text-blue-300  rounded-lg border-[2px] border-blue-700 p-2 text-xl w-[300px]"></input>
                    <input onChange={handleOcassion} placeholder="Enter Ocassion" className=" placeholder:text-blue-300 placeholder:font-bold rounded-lg border-[2px] border-blue-700 p-2 text-xl w-[300px]"></input>
                    <button type='submit'
                    className="hover:bg-blue-500 font-bold text-white text-lg bg-blue-400 p-3 w-1/2 rounded-lg border-[2px] border-blue-800 drop-shadow-md shadow-[5px_5px_0px_0px_rgba(30,64,75)]">Send</button>
                </form>
            </div>
            <GreetingCardModal name={name} ocassion={ocassion} ref={dialog}/>

        </>
    )
}

export default Input;