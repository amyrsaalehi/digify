import { useState } from 'react'
import DashboardLayout from '../../template/DashboardLayout'
import CollapsibleTable from '../../molecules/CollapsibleTable'
import SearchBar from '../../molecules/SearchBar'

function Report() {
  const [search, setSearch] = useState({ text: '', remote: false })
  const [shouldSearch, setShouldSearch] = useState(false)

  return (
    <DashboardLayout>
      <SearchBar search={search} setSearch={setSearch} setShouldSearch={setShouldSearch} />
      <CollapsibleTable search={search} shouldSearch={shouldSearch} setShouldSearch={setShouldSearch} />
    </DashboardLayout>
  )
}


export default Report
