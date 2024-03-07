import { useState } from "react";
import Modal from "./Modal";
import Portal from "./Portal";


const PortalModal = () => {

    const [showModal, setShowModal] = useState(false);

    // const handleClick =()=>{
    //     console.log('I am Clicked')
    // }

    return (
        <section className="mx-w-7xl mx-auto">
           <div 
           className="relative border border-black mb-5 p-4 w-64 h-20 overflow-hidden"
           >
            <button 
            onClick={()=> setShowModal(true)}
            className="btn btn-secondary"
            >
            Modal Using React Portal
            </button>

            {
                showModal &&  (
                    <Portal>
                    <Modal onClose={()=> setShowModal(false)}/>
                    </Portal>
                    
                )
            }

           </div>
        </section>
    );
};

export default PortalModal;