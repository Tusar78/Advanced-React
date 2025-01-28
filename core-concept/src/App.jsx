import "./App.css";

const App = () => {
  const usersInfo = [
    {id: 1, name: 'Tusar', age: 25},
    {id: 2, name: 'Aopo', age: 23},
    {id: 3, name: 'Salman', age: 23},
    {id: 4, name: 'Jannat', age: 22},
  ]
  return (
    <div>
      {usersInfo.map(user => <User key={user.id} user={user} />)}
    </div>
  );
};

const User = ({user: {name, age}}) => {
  
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  )
}

export default App;
