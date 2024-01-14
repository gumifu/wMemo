import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Hello from './src/components/Hello';

const App = (): JSX.Element => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-300">
      <Hello>World</Hello>
      <Text className="text-gray-500 font-bold">Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
