import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getallmovies } from './api/Apis'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    console.log(getallmovies)

    const fetchdata = async () => {
      const { data } = await axios.get(getallmovies)
      console.log(data);
    }
    fetchdata()
    // return () => {
    //   second
    // }
  }, [])

  return (
    <>
      <div>
        hello!!
      </div>
    </>
  )
}

export default App
