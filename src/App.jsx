import { useState } from "react";
import Counter from "./components/Counter";
import State from "./components/State";

const initialCounter = [
  {
    id:1,
    value: 0
  },
  {
    id:2,
    value: 0
  }
]

const App = () => {

  const [counters, setSetCounters] = useState(initialCounter);

  const totalCount = counters.reduce((sum, current) => sum +  current.value, 0)

  const handleIncrement =(counterId)=>{
   const updatedCounter = counters.map((counter=>{
      if(counter.id === counterId){
        return {
          ...counter,
          value: counter.value + 1
        };
      }
      return counter;
    }));
    setSetCounters(updatedCounter)
  }
  const handleDecrement =(counterId)=>{
   const updatedCounter = counters.map((counter=>{
      if(counter.id === counterId){
        return {
          ...counter,
          value: counter.value - 1
        };
      }
      return counter;
    }));
    setSetCounters(updatedCounter)
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