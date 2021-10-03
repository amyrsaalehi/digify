import { Container } from '@mui/material'
import React from 'react'

function DashboardLayout({ children }) {
  return (
    <Container>
      dashboard
      {children}
    </Container>
  )
}

export default DashboardLayout
