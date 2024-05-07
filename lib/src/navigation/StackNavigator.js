import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import SignupScreen from "../screen/SignupScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Login"}
        component={LoginScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name={"Signup"}
        component={SignupScreen}
        options={{ title: "Singup" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
