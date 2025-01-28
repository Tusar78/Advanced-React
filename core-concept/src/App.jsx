import "./App.css";

const App = () => {
  const isLoggedIn = true;
  return (
    <>
      <h2>Hello World</h2>
      <Greeting isLoggedIn={isLoggedIn} />
    </>
  )
}

const Greeting = ({isLoggedIn}) => {
  if (isLoggedIn === true) {
    return <p>Welcome</p>
  } else {
    return <p>Please log in</p>
  }
}

export default App;