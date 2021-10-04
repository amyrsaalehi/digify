import { Grid, TextField, Button } from '@mui/material'
import React from 'react'

function SearchBar({ search, setSearch, setShouldSearch }) {

  const handleSearch = () => {
    setShouldSearch(true)
  }

  return (
    <Grid container gap={1} sx={{ mb: 6, justifyContent: 'space-between' }}>
      <Grid item xs={12} md={9}>
        <TextField fullWidth type="text" label="Search among all Tasks..." variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button sx={{ height: '100%', width: '100%' }} onClick={handleSearch} variant="contained">Search</Button>
      </Grid>
    </Grid>
  )
}

export default SearchBar
