import { useState } from 'react'
import DashboardLayout from '../../template/DashboardLayout'
import { useGlobal } from '../../../core/contexts/Global'
import CollapsibleTable from '../../molecules/CollapsibleTable'
import SearchBar from '../../atoms/SearchBar'

function Report() {
  const { user } = useGlobal()
  const [search, setSearch] = useState('')
  const [shouldSearch, setShouldSearch] = useState(false)

  return (
    <DashboardLayout>
      <SearchBar search={search} setSearch={setSearch} setShouldSearch={setShouldSearch} />
      <CollapsibleTable search={search} shouldSearch={shouldSearch} setShouldSearch={setShouldSearch} />
    </DashboardLayout>
  )
}


export default Report
