import ShoppingCartWrap from "./Components/ObjectComponents/ShoppingCart/ShoppingCartWrap";
import PracticeR from "./Components/PracticeR";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-2 m-4">
      <ShoppingCartWrap />
      <div>
        <PracticeR />
      </div>
    </div>
  );
};

export default App;
