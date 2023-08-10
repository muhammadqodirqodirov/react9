import { Container, Stack } from '@mui/system'
import React from 'react'
import {LogoLink,ToDo} from "../header-down/styled"
import { MenuItem } from '@mui/base'
export const HeaderDown = () => {
    const [state,setState]=React.useState('eng');
    const onChangeS=(e)=>{
        setState(e.target.value)
      }
  return (
    <Container>
        <Stack justifyContent="space-between" direction="row" padding="22px 0" >
        <Stack><LogoLink>Hekto</LogoLink></Stack>
        <Stack>
     
        </Stack>
        </Stack>
    </Container>
  )
}
