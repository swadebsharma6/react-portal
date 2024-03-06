import { useState } from "react";
import ModalContent from "./ModalContent";


const TraditionalModal = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="max-w-7xl mx-auto text-center py-10">
           <button
           onClick={()=> setShowModal(true)}
           className="btn btn-primary">
           Show The Traditional Modal
           </button>

           {
            showModal && (
                <ModalContent onClose={()=> setShowModal(false)}/>
            )
           }
        </div>
    );
};

export default TraditionalModal;