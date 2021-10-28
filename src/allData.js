import { Card } from "react-bootstrap"
import { useState } from "react"

function AllData(){
  const [state, setState] = useState({
    allData:"",
  })
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  return (
<Card>
    <h1>All Data</h1>
    <h5>Actions: {}</h5>
  </Card>
  )
}
export default AllData