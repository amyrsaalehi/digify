import { makeStyles } from '@mui/styles'
import { Paper } from '@mui/material'
import VerticalStepper from '../../organisms/VerticalStepper'
import DashboardLayout from '../../template/DashboardLayout'
import { useCurrent } from '../../../core/contexts/Current'
import { isHoliday } from '../../../core/utils/day'


function EnterExit() {
  const classes = useStyles()
  const { current } = useCurrent()

  return (
    <DashboardLayout>
      <Paper className={classes.wrapper}>
        {
          isHoliday() ? null : <VerticalStepper initialStep={current.start > 0 ? 1 : 0} />
        }
      </Paper>
    </DashboardLayout>
  )
}

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0 20px 20px',
  }
})

export default EnterExit