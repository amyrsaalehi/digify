import { makeStyles } from '@mui/styles'
import { Paper, Typography } from '@mui/material'
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
          isHoliday() ? (
            <Typography variant="h5" align="center" sx={{ width: '100%', py: 8 }}>This is holiday... Go and have fun...</Typography>
          ) : (
            <VerticalStepper initialStep={current.start > 0 ? 1 : 0} />
          )
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