import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import State from "./components/State";
import { decrement, increment } from "./features/Counters/CounterSlice";



const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum +  current.value, 0)

  const handleIncrement =(counterId)=>{
    dispatch(increment(counterId));
  }
  const handleDecrement =(counterId)=>{
    dispatch(decrement(counterId));
  }


  return (
    <div>
    <h2 className="text-2xl font-bold text-center mt-5">Simple Counter Application</h2>

    <div className="mx-w-md mx-auto mt-10 space-y-5">
     {
      counters.map(counter => <Counter
        key={counter.id}
        count={counter.value}
        onIncrement = {()=> handleIncrement(counter.id)}
        onDecrement = {()=> handleDecrement(counter.id)}
        /> ) 
    
    }
     
      <State count={totalCount}/>
    </div>

   {/*<TraditionalModal/><PortalModal/> */}
    </div>
  );
};

export default App;