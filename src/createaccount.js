import { Card } from "react-bootstrap"
import { useState } from "react"

function CreateAccount(){
  const [state, setState] = useState({
    uname:'',
    email:'',
    password:'',
    submitInactive:true,
    firstAccount:"Create Account"
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
    if (state.uname == ''){
      alert("Username Not Entered")
    }
    if (state.email == ''){
      alert("Email Not Entered")
    }
    if (state.password.length<8){
      alert("Password is less than 8 characters")
    }
    if (state.uname !== '' && state.email !== '' && state.password.length>=8){
      alert("Account Successfully Created")}
    setState({
      ...state,
      uname:'',
      email:'',
      password:'',
      submitInactive:true,
      firstAccount:"Add Another Account"
    })
    
  }
  return (
    <Card>
    <h1>Create an Account</h1>
    <form onSubmit={handleSubmit}>
        <label>
          Name: <input
            type="text"
            name="uname"
            value={state.uname}
            onChange={handleChange} />
          Email Address: 
          <input
          type="text"
            name="email"
            value={state.email}
            onChange={handleChange} />
          Password: 
          <input
          type="text"
            name="password"
            value={state.password}
            onChange={handleChange} />
        </label>
        <h5>Name: {state.uname}</h5>
        <h5>Email: {state.email}</h5>
        <input disabled={state.submitInactive} type="submit" value={state.firstAccount} />
      </form>
    </Card>
  )
}
export default CreateAccount