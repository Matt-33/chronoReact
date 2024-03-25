import React, {useState} from 'react'
import './App.css'
import Counter from './complement/Counter'
import Message from './complement/Message'

function App() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <div className='App'>
        <Counter setShowMessage={setShowMessage} />
        <Message show={showMessage} />
      </div>
    </>
  )
}

export default App
