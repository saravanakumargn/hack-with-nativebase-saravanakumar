import { NativeBaseProvider, VStack, HStack, Button, IconButton, Icon, Text, Center, Box, StatusBar, extendTheme, useColorMode } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native';
import { BodyTypography } from "./src/components/typography";
import { Main } from "./src/Main";
import { RNTesterThemeContext, themes } from "./src/theme/theme";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}

