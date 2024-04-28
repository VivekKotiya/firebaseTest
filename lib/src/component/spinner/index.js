import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"small"} color={"red"} />
    </View>
  );
};

export default Spinner;
