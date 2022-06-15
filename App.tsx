import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Main } from "./src/Main";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

