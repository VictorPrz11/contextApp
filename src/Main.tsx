import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from './config/app-theme'
import { BottomTab } from './presentation/navigators/BottomTab'
import { NavigationContainer } from '@react-navigation/native'

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
   
  )
}
