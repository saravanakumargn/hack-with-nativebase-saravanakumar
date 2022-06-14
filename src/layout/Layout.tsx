import React, { FC, memo, ReactChild, ReactElement, ReactNode, useMemo } from "react";
import {
  VStack,
  HStack,
  Container,
  IconButton,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { Icon } from "../components/icon";
import { Header } from "./components";
import { StyleSheet, View } from "react-native";

export interface LayoutProps {
  children: ReactChild;
}

export const Layout: FC<LayoutProps> = ({
  children,
}) => {
  return (
    <Box flex={1} width="100%">
      <Header />
      <View style={styles.container}>{children}</View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
