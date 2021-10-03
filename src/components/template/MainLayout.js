import { Container } from '@mui/material'
import React from 'react'

function MainLayout({ children }) {
  return (
    <Container>
      main
      {children}
    </Container>
  )
}

export default MainLayout
