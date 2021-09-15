// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  // EXTRA CREDIT 1.1 Make the Greeting accept a prop called initialName and initialize the name state to that value. 
  // Greeting component accepts whatever is passed to it and if nothing is passed it defaults to ''

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name}/>
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Andrew"/>
}

export default App
