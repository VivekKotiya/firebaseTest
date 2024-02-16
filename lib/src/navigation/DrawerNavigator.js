import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screen/LoginScreen";
import SignupScreen from "../screen/SignupScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={LoginScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
