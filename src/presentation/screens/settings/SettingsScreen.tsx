import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../../config/app-theme'
import {useCounterStore} from '../../store/counterstore'
import { useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {
  const increment = useCounterStore(state => state.incrementBy)
  const count = useCounterStore(state => state.count)
  const navigation = useNavigation()
  useEffect(() => {
   navigation.setOptions({
    headerTitle: `Contador: ${count}`
   })
  }, [count])
  
  return (
    <View style={globalStyles.container}>
       <Text style= {globalStyles.title}>Count: {count}</Text>
      <Pressable style = {globalStyles.primaryButton}  onPress={()=>increment(+1)}>
        <Text>+1</Text>
      </Pressable>
      <Pressable  style = {globalStyles.primaryButton} onPress={()=>increment(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  )
}
