import { extendTheme, NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Main } from "./src/Main";

export default function App() {

  const theme = extendTheme({
    components: {
      Button: {
        defaultProps: {
          colorScheme: "violet",
        },
      },
      Progress: {
        defaultProps: {
          colorScheme: "violet",
        },
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'light',
    },
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

