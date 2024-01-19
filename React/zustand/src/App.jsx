import { create } from "zustand";

const useStore = create((set) => ({
  counter: 0,
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));

function App() {
  const {
    counter,
    increment,
    decrement,
    bears,
    increasePopulation,
    removeAllBears,
  } = useStore();

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <p>Bears: {bears}</p>
      <button onClick={increment}>Increment C</button>
      <button onClick={decrement}>DecrementC</button>
      <button onClick={increasePopulation}>Iecrement B</button>
      <button onClick={removeAllBears}>set B 0</button>
    </div>
  );
}

export default App;
