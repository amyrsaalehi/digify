import MainLayout from '../template/MainLayout'
import { TextField, Paper, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { USERS } from '../../constants/storage'
import { useHistory } from 'react-router'
import { getUser } from '../../utils/storage'

function SignUp() {
  const [form, setFrom] = useState({ name: '', phone: '' })
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

    const { user, users } = getUser(window?.localStorage, form)

    if (user) {
      console.log('This user exists! Please Login');
      history.push('login')
    } else {
      window.localStorage.setItem(USERS, JSON.stringify([...users, { id: users.length + 1, enterExits: [], ...form }]))
      console.log('This user has been succefully registered! Please Login!');
      history.push('login')
    }
  }

  return (
    <MainLayout>
      <Paper className={classes.wrapper}>
        <h1>Sign up</h1>
        <TextField type="text" className={classes.input} label="Name" variant="outlined" name="name" value={form.name} onChange={handleFormChanged} />
        <TextField type="number" className={classes.input} label="Phone" variant="outlined" name="phone" value={form.phone} onChange={handleFormChanged} />
        <Button onClick={handleFormSubmited} variant="contained">Register</Button>
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
      width: 320,
      padding: 10
    }
  },
  input: {
    width: 320
  }
}))

export default SignUp
