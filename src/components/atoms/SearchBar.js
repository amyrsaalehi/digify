import { Grid, TextField, Button } from '@mui/material'
import ToggleGroup from './ToggleGroup'

function SearchBar({ search, setSearch, setShouldSearch }) {

  const handleSearch = () => {
    setShouldSearch(true)
  }

  const onChangeRemote = (newValue) => {
    setSearch(prev => ({
      ...prev,
      remote: newValue
    }))
  }

  return (
    <Grid container gap={1} sx={{ mb: 6, justifyContent: 'space-between' }}>
      <Grid item xs={12} md={7}>
        <TextField
          sx={{ height: '100%' }}
          fullWidth type="text" label="Search among all Tasks..." variant="outlined" value={search.text} onChange={(e) => setSearch(prev => ({
            ...prev,
            text: e.target.value
          }))} />
      </Grid>
      <Grid item xs={12} sm={5} md={2}>
        <ToggleGroup
          isRemote={search.remote}
          setIsRemote={onChangeRemote}
          options={['remote', 'all']}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={2}>
        <Button sx={{ height: '100%', width: '100%', maxHeight: 56 }} onClick={handleSearch} variant="contained">Search</Button>
      </Grid>
    </Grid >
  )
}

export default SearchBar
