import React, {
  FC,
  memo,
  ReactChild,
  ReactElement,
  ReactNode,
  useMemo,
} from "react";
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
  Stack,
  Hidden,
} from "native-base";
import { Icon } from "../components/icon";
import { Header, Sidebar } from "./components";
import { StyleSheet, View } from "react-native";
import ViewContainer from "../components/view/ViewContainer";

export interface LayoutProps {
  children: ReactChild;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ViewContainer>
      <Header />
      <ViewContainer>
        {/* <View style={styles.container}>{children}</View> */}
        <Stack w="100%" h="100%" direction={{ base: "column", md: "row" }}>
          {/* <Hidden from="sm" till="lg"> */}
          <VStack
            space={{ base: "6", md: "4" }}
            flex={{ base: "none", md: 1 }}
            //   flex={{ base: "6", md: 1 }}
            //   p="4"
            bg="green.500"
          >
            <Sidebar />
          </VStack>
          {/* </Hidden> */}
          <Box flex={{ base: 1, md: 3 }} bg="blueGray.50">
            <ViewContainer flex={{ base: 1, md: 3 }} bg="blueGray.50">
              {/* <SettingsScreen /> */}
              {children}
            </ViewContainer>
          </Box>
        </Stack>
      </ViewContainer>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
