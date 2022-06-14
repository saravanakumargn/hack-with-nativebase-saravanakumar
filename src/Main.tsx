import React, { FC, memo, ReactElement, useMemo } from "react";
import {
  VStack,
  HStack,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Stack,
  useColorMode,
  Switch,
} from "native-base";
import { Layout } from "./layout";
import { GroupedView, ViewContainer } from "./components/view";
import { RNTesterThemeContext, themes } from "./theme/theme";
import { SettingsScreen } from "./screens";
import { SideBar } from "./screens/components/SideBar";

export const Main: FC = () => {
    const { colorMode } = useColorMode();
  
  return (
    <RNTesterThemeContext.Provider value={colorMode === 'dark' ? themes.dark : themes.light}>
    <Layout>
      <Stack w="100%" h="100%" direction={{ base: "column", md: "row" }}>
        <VStack
          space={{ base: "6", md: "4" }}
          //   flex={{ base: "6", md: 1 }}
        //   p="4"
        //   bg="green.500"
        >
            <SideBar />
          {/* <ViewContainer p="16">

          <ToggleDarkMode />
            <Text>Hello</Text>
          </ViewContainer> */}
        </VStack>

        <ViewContainer flex={{ base: 1, md: 3 }} bg="blueGray.50">
            <SettingsScreen />
          {/* <ViewContainer isSecondaryBackground>
              <GroupedView headerLabel="Settings"
              headerIconName="arrow-back">
            <Text>Hello11</Text>
            </GroupedView>
          </ViewContainer> */}
        </ViewContainer>
      </Stack>
    </Layout>
    </RNTesterThemeContext.Provider>
  );
};

function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
        />
        <Text>Light</Text>
      </HStack>
    );
  }