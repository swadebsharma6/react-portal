// const Child =()=>{
//     return (
//         <div className="border border-red-500 p-2">
//         <h1 className="text-2xl font-bold text-primary">I am A Child</h1>
//         <button className="btn btn-primary">Click</button>
//         </div>
//     )
// }


const Modal = ({onClose}) => {
    return (
        <div className="flex flex-col p-4 items-center border border-lg absolute top-20 left-12 bottom-20 z-10 bg-black text-white rounded-md" role="dialog" aria-modal="true">
           <h4 className="text-2xl font-bold ">Hey, I am a Modal !!</h4> 
         { /*<Child/> */}
           <button 
           onClick={ onClose}
           className="btn btn-secondary"
           >Close</button>
        </div>
    );
};

export default Modal;