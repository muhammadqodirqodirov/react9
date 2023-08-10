import { Container } from '@mui/system'
import { HeaderTopWrapper,StyleLink ,StyleTell,StyleLogin} from './sttyled'
import React from 'react'
import { MenuItem, Stack } from '@mui/material'
import { Select } from '../../../components/select'
import {PhoneIcon} from "../../../assets/icon/phone-icon"
import {Message} from "../../../assets/icon/message"
import {UserIcon} from "../../../assets/icon/user-icon"
import {Heart} from "../../../assets/icon/heart"
import {Karzinka} from "../../../assets/icon/karzinka"


export const HeaderTop = () => {
  const [state,setState]=React.useState('eng');
  const [data,setData]=React.useState('usd');
  const onChangeM=(e)=>{
    setData(e.target.value)
  }
  const onChangeS=(e)=>{
    setState(e.target.value)
  }
  return (
    <HeaderTopWrapper>
      <Container>
    <Stack direction="row" justifyContent="space-between">
        <Stack gap="48px" direction="row" alignItems="center">
          <StyleLink href='mailto:mhhasanul@gmail.com' >
            <Message/>
            <span>mhhasanul@gmail.com</span>
          </StyleLink >
          <StyleTell href='tel:(12345)67890'>
            <PhoneIcon/>
            <span>(12345)67890</span>
          </StyleTell>
        </Stack>
        <Stack gap="17px" direction="row" alignItems="center">
          <Select value={state} onChange={onChangeS}>
              <MenuItem value="eng">Eng </MenuItem>
              <MenuItem value="rus">Rus</MenuItem>
              <MenuItem value="uzb">Uzb</MenuItem>
              <MenuItem value="kre">Korean</MenuItem>
          </Select>
          <Select value={data} onChange={onChangeM}>
              <MenuItem value="usd">Usd</MenuItem>
              <MenuItem value="rub">Rub</MenuItem>
              <MenuItem value="sum">Sum</MenuItem>
          </Select>
          <StyleLogin >
            <span>Login</span>
            <UserIcon/>
          </StyleLogin>
          <StyleLogin>
            <span>WishList</span>
            <Heart/>  
          </StyleLogin>
          <StyleLogin>
            <Karzinka/>
          </StyleLogin>
        </Stack>
    </Stack>
      </Container>
    </HeaderTopWrapper>
  )
}
