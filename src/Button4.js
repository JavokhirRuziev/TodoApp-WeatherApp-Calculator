import { Button } from '@mui/material'
import React from 'react'

function Button4({children,style,onClick}) {
  return (
    <div>
      <Button onClick={onClick} variant='contained' color='secondary' style={style}>{children}</Button>
    </div>
  )
}

export default Button4