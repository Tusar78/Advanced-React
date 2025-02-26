import ExampleOne from "./Components/ObjectComponents/API/ExampleOne";
import PracticeR from "./Components/PracticeR";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-2 m-4">
      <ExampleOne />
      <div>
        <PracticeR />
      </div>
    </div>
  );
};

export default App;
