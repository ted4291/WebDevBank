import { Card } from "react-bootstrap"
import logo from "./assets/BankLogo.jpg"

function Home(){
  return (
    <Card>
      <h1>The Best Bank Ever</h1>
      <img src={logo} width="30%"/>
      <h3>Welcome to the absolute best bank ever! FDIC Insured!</h3>
    </Card>
  )
}
export default Home