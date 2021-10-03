import { Route, Switch } from "react-router-dom";
import EnterExit from '../components/pages/Enter-Exit'
import Report from '../components/pages/Report'

function DashboardRoutes() {


  return (
    <Switch>
      <Route exact path="/dashboard/enter-exit" component={EnterExit} />
      <Route exact path="/dashboard/report" component={Report} />
    </Switch>
  )
}

export default DashboardRoutes