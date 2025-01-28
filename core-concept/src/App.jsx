
import "./App.css";

const App = () => {
  const usersData = [
    { id: 1, name: 'John', age: 28, hobby: 'Reading' },
    { id: 2, name: 'Sarah', age: 34, hobby: 'Traveling' },
    { id: 3, name: 'Tom', age: 22, hobby: 'Gaming' },
    { id: 4, name: 'Emma', age: 27, hobby: 'Cooking' },
    { id: 5, name: 'Oliver', age: 30, hobby: 'Photography' },
    { id: 6, name: 'Sophia', age: 25, hobby: 'Music' },
    { id: 7, name: 'Lucas', age: 40, hobby: 'Hiking' },
    { id: 8, name: 'Mia', age: 32, hobby: 'Yoga' },
    { id: 9, name: 'James', age: 29, hobby: 'Cycling' },
    { id: 10, name: 'Lily', age: 35, hobby: 'Gardening' },
  ];

  let isloggedIn = true; 
  
  return (
    <div>
      <div className="header">
        <Header isloggedIn={isloggedIn} />
      </div>
      
      {isloggedIn && usersData.map(user => <UserList key={user.id} user={user} />)}
    </div>
  )
};

const Header = ({isloggedIn}) => {
  return isloggedIn ? 'Welcome' : 'Please login'
}

const UserList = ({user}) => {
  return (
    <div className="user__list">
        <div className="user__item">
          <h3>Name: {user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Hobby: {user.hobby}</p>
        </div>
      </div>
  )
}

export default App;
