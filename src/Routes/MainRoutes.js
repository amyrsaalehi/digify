import { Route, Switch } from "react-router-dom";
import Login from '../components/pages/Login'
import SignUp from '../components/pages/Sign-up'
import Home from '../components/pages/Home.js'

function MainRoutes() {

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default MainRoutes