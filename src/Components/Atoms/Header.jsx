
import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Header(props) {
  return (
    <Container sx={{textAlign:'center', gap:'px', padding: '16px', backgroundColor: 'secondary.main' }}>
        <Typography variant='h3' sx={{ marginBottom: '32px', marginTop:'32px' }}>{props.title}</Typography>
        <Typography variant='h6' sx={{ marginBottom: '8px' }}>{props.subtitle}</Typography>
    </Container>
  )
}
