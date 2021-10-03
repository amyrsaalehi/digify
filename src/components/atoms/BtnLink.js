import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

function BtnLink({ link }) {

  return (
    <Button variant="outlined" key={link.title} >
      <NavLink exact to={link.path}>
        {link.title}
      </NavLink>
    </Button>
  )
}

export default BtnLink
