import { NavigationContainer } from "@react-navigation/native";
import * as StackNavigation from "./stacks";

export default function Routes(){
  return (
    <NavigationContainer>
      <StackNavigation.AppRoute />
    </NavigationContainer>
  )
}