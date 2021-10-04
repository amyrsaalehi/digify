import { Route, Switch, useHistory } from "react-router-dom";
import EnterExit from '../../components/pages/dashboard'
import Report from '../../components/pages/dashboard/report'
import { getUser } from "../utils/storage";

function DashboardRoutes() {
  const user = getUser()
  const history = useHistory()

  if (!user?.user) {
    history.push('/login')
  }

  return (
    <Switch>
      <Route exact path="/dashboard" component={EnterExit} />
      <Route exact path="/dashboard/report" component={Report} />
    </Switch>
  )
}

export default DashboardRoutes