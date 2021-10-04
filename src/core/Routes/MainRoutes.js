import { Route, Switch } from "react-router-dom";
import Login from '../../components/pages/login'
import SignUp from '../../components/pages/sign-up'
import Home from '../../components/pages/home'

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