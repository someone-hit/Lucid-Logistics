import { useState } from 'react'
import Course from './Pages/Course'
import Aboutcourse from './Pages/Aboutcourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Course />
    <Aboutcourse />
    </>
  )
}

export default App
