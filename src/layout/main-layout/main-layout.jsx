import React from 'react'
import { Header } from '../header/header'

export const MainLayout = ({childern}) => {
  return (
    <>
    <Header/>
    <main>
      {childern}
    </main>
    </>
  )
}
