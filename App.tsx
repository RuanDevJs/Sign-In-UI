import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";
import Routes from './src/Routes/index.routes';

import theme from './src/styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden/>
      <Routes />
    </ThemeProvider>
  );
}

