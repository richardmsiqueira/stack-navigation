import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Profile</Text>
      <View>
      <Text>Contact</Text>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <Text>Voltar pra Home</Text>
      </TouchableOpacity>
    </View>
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