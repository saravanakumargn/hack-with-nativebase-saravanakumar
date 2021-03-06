import { extendTheme, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src/Main";

export default function App() {
  const theme = extendTheme({
    components: {
      Button: {
        defaultProps: {
          colorScheme: "violet",
        },
      },
      Radio: {
        defaultProps: {
          colorScheme: "violet",
        },
      },
      Switch: {
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
      initialColorMode: "light",
      // initialColorMode: "dark",
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
