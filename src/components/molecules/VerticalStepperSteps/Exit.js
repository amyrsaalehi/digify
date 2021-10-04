import { makeStyles } from '@mui/styles'
import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useCurrent } from '../../../core/contexts/Current'

function Exit({ shouldSave }) {
  const classes = useStyles()
  const { current, setCurrent } = useCurrent()
  const [tasks, setTasks] = useState('')

  const handleTasksChanged = (e) => {
    setTasks(e.target.value)
  }

  useEffect(() => {
    if (shouldSave && tasks !== '' && current.tasks.length === 0) {
      const tasksArray = tasks
        .split(',')
        .map(t => t.trim())
        .filter(t => t !== '')
        .map((t, index) => ({ id: index + 1, title: t }))

      setCurrent(prev => ({
        ...prev,
        tasks: tasksArray
      }))
    }
  }, [shouldSave])

  return (
    <div>
      <TextField
        required
        className={classes.input}
        type="text"
        label="Tasks"
        helperText="Enter your tasks and separate them with `,`"
        multiline
        rows={8}
        variant="outlined"
        value={tasks}
        onChange={handleTasksChanged}
      />
    </div>
  )
}

const useStyles = makeStyles({
  input: {
    width: '80%'
  }
})

export default Exit
