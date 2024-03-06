const Modal = ({onClose}) => {
    return (
        <div className="flex justify-evenly items-center border border-lg absolute top-20 left-12 bottom-20 z-10 bg-gray-300">
           <h4 className="text-2xl font-bold ">Hey, I am a Modal !!</h4> 
           <button 
           onClick={ onClose}
           className="btn btn-secondary"
           >Close</button>
        </div>
    );
};

export default Modal;