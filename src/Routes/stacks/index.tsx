import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components/native";

import Home from "../../Screens/Home";
import Login from "../../Screens/Login";

export function AppRoute(){
  const theme = useTheme();
  const Navigation = createNativeStackNavigator();

  return (
    <Navigation.Navigator 
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.COLORS.white
        }
      }}
    >
      <Navigation.Screen
        component={Home}
        name="Home"
      />
      <Navigation.Screen
        component={Login}
        name="Login"
      />
    </Navigation.Navigator>
  )
}