

const ModalContent = ({onClose}) => {
    return (
        <div >
           <h4 className="text-2xl font-bold ">Hey, I am a Modal !!</h4> 
           <button 
           onClick={ onClose}
           className="btn btn-secondary"
           >Close</button>
        </div>
    );
};

export default ModalContent;