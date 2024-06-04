import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profileStore'
import { counterStore } from '../../store/counterstore'

export const HomeScreen = () => {
  const name = useProfileStore(state =>state.name)
  const email = useProfileStore(state =>state.email)
  // const count = counterStore(state =>state.count)


  return (
    <View style = {globalStyles.container}>
      <Text style = {globalStyles.title}>{name}</Text>
      <Text style = {globalStyles.title}>{email}</Text>
      {/* <Text style= {globalStyles.title}>Count: {count}</Text> */}
    </View>
  )
}
