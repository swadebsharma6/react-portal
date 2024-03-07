

const Counter = ({count, onIncrement,  onDecrement}) => {

    // const [count, setCount] = useState(0);

    // const handleIncrement = ()=>{
    //     setCount((prevCount)=> prevCount + 1)
    // }
    // const handleDecrement = ()=>{
    //     setCount((prevCount)=> prevCount - 1)
    // }

    return (
        <div className="text-center">
            <h2 className="text-xl font-bold text-center">Count : {count}</h2>

            <button className="btn btn-primary m-4" onClick={onIncrement}>Increment</button>
            <button className="btn btn-secondary" onClick={onDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;