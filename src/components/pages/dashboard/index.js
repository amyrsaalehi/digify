import { makeStyles } from '@mui/styles'
import { Paper } from '@mui/material'
import VerticalStepper from '../../molecules/VerticalStepper'
import DashboardLayout from '../../template/DashboardLayout'


function EnterExit() {
  const classes = useStyles()


  return (
    <DashboardLayout>
      <Paper className={classes.wrapper}>
        <VerticalStepper />
      </Paper>
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

export default EnterExit