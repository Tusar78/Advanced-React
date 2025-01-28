import React from 'react'

const App = () => {

  const hanlder = data => {
    alert(data + 5)
  }
  return (
    <div>
      <button onClick={()=> hanlder(10)}>Click</button>
    </div>
  )
}

export default App
