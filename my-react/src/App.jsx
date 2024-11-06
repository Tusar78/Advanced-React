import "./App.css";

function App() {
  const personInfo = {
    name: 'Tusar',
    age: 24,
    job: 'Web Developer'
  }
  return (
    <>
      <Card personInfo={personInfo}></Card>
    </>
  );
}

function Card({personInfo:{name, age, job}}) {
  const cardStyle = {
    border: '1px solid palegreen',
    borderRadius: '8px',
    padding: '6px 60px'
  }

  return (
    <>
      <div style={cardStyle}>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Job: Web Developer</p>
      </div>
    </>
  )
}

export default App;
