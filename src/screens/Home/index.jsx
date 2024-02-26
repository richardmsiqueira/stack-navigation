import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.Htext}>Home</Text>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
        <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Contact')}>
        <Text>Contato</Text>
      </TouchableOpacity>

    </View>
  )
}

