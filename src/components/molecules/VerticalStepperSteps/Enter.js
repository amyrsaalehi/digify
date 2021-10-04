import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useCurrent } from '../../../core/contexts/Current'
import { useGlobal } from '../../../core/contexts/Global'
import ToggleGroup from '../../atoms/ToggleGroup'

function Enter({ shouldSave }) {
  const { setCurrent } = useCurrent()
  const [isRemote, setIsRemote] = useState(false)
  const { user } = useGlobal()

  useEffect(() => {
    if (shouldSave) {
      setCurrent(prev => ({
        ...prev,
        id: user.enterExits.length + 1,
        start: Date.now(),
        remote: isRemote
      }))
    }
  }, [shouldSave])


  return (
    <Grid container gap={1}>
      <Grid item xs={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ToggleGroup isRemote={isRemote} setIsRemote={setIsRemote} />
      </Grid>
    </Grid>
  )
}

export default Enter
