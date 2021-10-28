import { Card } from "react-bootstrap"
import { useState } from "react"

function Withdraw(){
  const [state, setState] = useState({
    withD:'',
    email:"",
    password:"",
    balance:100,
    submitInactive:true,
  });
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      submitInactive:false
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (state.withD>state.balance){
      alert("Overdraft Warning! Withdrawal not possible")
    }
    else if (Number(state.withD<0)){
      alert("Only Positive Withdrawal Values Allowed")
    }
    else {
    alert("Withdrawal Successfully Made")
    setState({
      ...state,
      balance:Number(state.balance)-Number(state.withD)
  })}
}

return (

<Card>
    <h1>Withdraw</h1>
    <form onSubmit={handleSubmit}>
    <h5>Balance Amount: {state.balance}</h5>
        <label> 
          <input
            type="number"
            name="withD"
            value={state.withD}
            onChange={handleChange} />
        </label>
        <input disabled={state.submitInactive} type="submit" value="Withdraw" />
    </form>
  </Card>
  )
}
export default Withdraw