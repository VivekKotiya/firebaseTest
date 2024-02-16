import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screen/LoginScreen";
import SignupScreen from "../screen/SignupScreen";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();
let val = 2;

setTimeout(() => {
  val += 2;
}, 20);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={LoginScreen}
        options={{
          tabBarIcon: () => (
            <Icon color="#0CC" name="home" size={30} type="ionicons" />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          tabBarIcon: () => (
            <Icon color="#0CC" name="login" size={30} type="ionicons" />
          ),
          tabBarBadge: val,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
