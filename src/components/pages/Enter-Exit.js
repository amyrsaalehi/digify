import { useGlobal } from '../../contexts/Global'
import DashboardLayout from '../template/DashboardLayout'


function EnterExit() {
  const { user } = useGlobal()
  return (
    <DashboardLayout>

    </DashboardLayout>
  )
}

export default EnterExit
