import MainLayout from '../template/MainLayout'
import { TextField, Paper, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useGlobal } from '../../contexts/Global'
import { getUser } from '../../utils/storage'

function Login() {
  const [form, setFrom] = useState({ name: '', phone: '' })
  const { setUser } = useGlobal();
  const classes = useStyles()
  const history = useHistory()

  const handleFormChanged = (e) => {
    setFrom(prev => ({
      ...prev,
      [e.target.name]: e.target.name === 'name' ?
        e.target.value.replace(/\s\s/g, ' ').replace(/\d/g, '') :
        e.target.value.replace(/\s/g, '')
    }))
  }

  const handleFormSubmited = () => {
    setFrom(prev => ({
      ...prev,
      name: prev.name.trim()
    }))

    const { user } = getUser(window?.localStorage, form)

    if (user) {
      console.log('This user logged in successfuly!');
      setUser(user);
      history.push('/dashboard')
    } else {
      console.log('User not found! please Register!');
      history.push('/sign-up')
    }
  }

  return (
    <MainLayout>
      <Paper className={classes.wrapper}>
        <h1>Login</h1>
        <TextField type="text" className={classes.input} label="Name" variant="outlined" name="name" value={form.name} onChange={handleFormChanged} />
        <TextField type="number" className={classes.input} label="Phone" variant="outlined" name="phone" value={form.phone} onChange={handleFormChanged} />
        <Button onClick={handleFormSubmited} variant="contained">Login</Button>
      </Paper>

    </MainLayout>
  )
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    gap: 20,
    '& h1': {
      marginBottom: 60
    },
    '& button': {
      width: 250,
      padding: 10
    }
  },
  input: {
    width: 250
  }
}))

export default Login
