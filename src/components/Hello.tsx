import { Text, View } from 'react-native';

interface Props {
  children: string;
}

const Hello = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <View>
      <Text className="text-white bg-blue-500 text-xl p-4">
        Hello! {children}
      </Text>
    </View>
  );
};

export default Hello;
