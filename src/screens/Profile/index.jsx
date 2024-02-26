import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Profile() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.Htext}>Profile</Text>
      <View>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <Text>Voltar pra Home</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

