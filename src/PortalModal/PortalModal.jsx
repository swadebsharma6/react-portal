import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";


const PortalModal = () => {

    const [showModal, setShowModal] = useState(false);

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
                showModal &&  createPortal(
                    <Modal onClose={()=> setShowModal(false)}/>, document.body
                )
            }

           </div>
        </section>
    );
};

export default PortalModal;