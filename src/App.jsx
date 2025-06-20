import { useState } from 'react'
import Course from './Pages/Course'
import Aboutcourse from './Pages/Aboutcourse'
import Results from './Pages/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Course />
    <Aboutcourse /> 
    <Results />
    </>
  )
}

export default App
