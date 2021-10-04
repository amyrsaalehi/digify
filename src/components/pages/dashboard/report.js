import { makeStyles } from '@mui/styles'
import DashboardLayout from '../../template/DashboardLayout'
import { useGlobal } from '../../../core/contexts/Global'
import CollapsibleTable from '../../molecules/CollapsibleTable'

function Report() {
  const classes = useStyles()
  const { user } = useGlobal()

  console.log(user)
  return (
    <DashboardLayout>
      <CollapsibleTable />
    </DashboardLayout>
  )
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0 20px 20px',
  }
}))

export default Report
