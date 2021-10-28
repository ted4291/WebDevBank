import { Card } from "react-bootstrap"
import { useState } from "react"

function Deposit(){
  const [state, setState] = useState({
    DepD:'',
    email:"",
    password:"",
    balance:100,
    submitInactive:true,
  })
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      submitInactive:false
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (Number(state.DepD<0)){
      alert("Only Positive Deposits Allowed")
    }
    else {
    alert("Deposit Successfully Made")
    setState({
      ...state,
      balance:Number(state.balance)+Number(state.DepD)
  })}
}

  return (
<Card>
    <h1>Deposit</h1>
    <form onSubmit={handleSubmit}>
    <h5>Balance Amount: {state.balance}</h5>
        <label> 
          <input
            type="number"
            name="DepD"
            value={state.DepD}
            onChange={handleChange} />
        </label>
        <input disabled={state.submitInactive} type="submit" value="Deposit" />
    </form>
  </Card>
  )
}
export default Deposit