import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View className=''>
      <Text>Login Page</Text>
      <Link href={'/dois'}>Pagina dois</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
