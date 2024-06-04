import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profileStore';

export const ProfileScreen = () => {
  const name = useProfileStore(state =>state.name)
  const email = useProfileStore(state =>state.email)
  const changeData = useProfileStore(state =>state.changeProfile)

  return (
    <View style = {globalStyles.container}>

      <Text style = {globalStyles.title}>{name}</Text>
      <Text style = {globalStyles.title}>{email}</Text>
      <Pressable style = {globalStyles.primaryButton} onPress={()=>useProfileStore.setState({name:'Juan prz'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable style = {globalStyles.primaryButton} onPress={()=>useProfileStore.setState({email: 'Juanprzzzzzzz@holamundo.com'})}>
        <Text>Cambiar email</Text>
      </Pressable>
      <Pressable style = {globalStyles.primaryButton} onPress={()=>changeData( 'Victor Prz',
    'VicPrrrrrr@holamundo.com',)}>
        <Text>Regresar a victor</Text>
      </Pressable>
      
      
    </View>
  )
}
