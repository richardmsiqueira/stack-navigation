import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    margin: 5
  },
  Htext: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})