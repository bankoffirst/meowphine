import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/Login'
import Signup from './components/SignUp'
import { AuthProvider } from './components/Auth'
import Cart from './components/Cart'
import Main from './components/Main'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path = "/"><Main/></Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
