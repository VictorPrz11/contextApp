import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profileStore';

export const ProfileScreen = () => {
  const name = useProfileStore(state =>state.name)
  const email = useProfileStore(state =>state.email)
  return (
    <View style = {globalStyles.container}>
    <Text style = {globalStyles.title}>
       Profile Screen
    </Text>
</View>
  )
}
