import { Text, View } from "react-native";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const SimpleView = () => {
  const { name, happyBirthday, age } = useContext(UserContext);
  setTimeout(() => happyBirthday(), 2000);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default SimpleView;
