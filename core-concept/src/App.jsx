import "./App.css";

const App = () => {
  const isLoggedIn = true;
  return (
    <>
      <h2>Hello World</h2>
      {/* <Greeting isLoggedIn={isLoggedIn} /> */}
      <Notification newMessage={true} />
    </>
  );
};

// If Else
// const Greeting = ({isLoggedIn}) => {
//   if (isLoggedIn === true) {
//     return <p>Welcome</p>
//   } else {
//     return <p>Please log in</p>
//   }
// }

// Conditional Rendering using && Operator
const Notification = ({ newMessage }) => {
  return newMessage && alert("You have a new message!");
};

export default App;
