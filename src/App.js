import { BrowserRouter, Route } from 'react-router-dom';
import CreateAccount from './createaccount';
import Home from './home';
import Withdraw from './withdraw';
import Deposit from './deposit';
import AllData from './allData';
import Header from './Header';

function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Route path='/:page' component={Header} />
          <Route exact path='/' component={Header} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/create account' component={CreateAccount} />
          <Route exact path='/withdraw' component={Withdraw} />
          <Route exact path='/deposit' component={Deposit} />
          <Route exact path='/all data' component={AllData} />
        </BrowserRouter>
      </div>
    );
}

export default App;
