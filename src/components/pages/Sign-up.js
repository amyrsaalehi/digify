import MainLayout from '../template/MainLayout'
import { TextField, Paper, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { signUp } from '../../core/utils/storage'
import { testString } from '../../core/constants/regex'

function SignUp() {
  const [form, setFrom] = useState({ name: '', phone: '' })
  const classes = useStyles()
  const history = useHistory()

  const handleFormChanged = (e) => {
    let tempForm = { name: '', phone: '' }

    if (e.target.name === 'name') {
      tempForm.name = e.target.value.replace(/\s\s/g, ' ').replace(/\d/g, '');
    }

    if (e.target.name === 'phone') {
      tempForm.phone = e.target.value.replace(/\s/g, '')
      if (tempForm.phone < 0) {
        tempForm.phone = 0
      }
    }

    setFrom(prev => ({
      ...prev,
      [e.target.name]: tempForm[e.target.name]
    }))
  }

  const handleFormSubmited = () => {
    if (!testString(form.phone, 'PHONE')) {
      alert('Phone number is not valid!')
      return;
    }
    setFrom(prev => ({
      ...prev,
      name: prev.name.trim()
    }))

    const { user } = signUp(window?.localStorage, form)

    if (user) {
      alert('It seems this user exists! Please Login!');
      history.push('login')
    } else {
      alert('This user has been succefully registered! Please Login!');
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

const useStyles = makeStyles({
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
})

export default SignUp
