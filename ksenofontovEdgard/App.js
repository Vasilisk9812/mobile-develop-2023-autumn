import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
