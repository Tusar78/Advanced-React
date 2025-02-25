import MountUnmount from "./Components/MountUnmount";
import PracticeR from "./Components/PracticeR";
import WidthEvent from "./Components/WidthEvent";

const App = () => {
  return (
    <div className="grid grid-cols-2 gap-2 m-4">
      <PracticeR />
      <div>
        <WidthEvent />
        <MountUnmount />
      </div>
    </div>
  );
};

export default App;
