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
  useColorMode,
  Switch,
  Hidden,
} from "native-base";
import { Layout } from "./layout";
import { GroupedView, ViewContainer } from "./components/view";
import { RNTesterThemeContext, themes } from "./theme/theme";
import { SettingsScreen, TrackOrderScreen } from "./screens";
import { SideBar } from "./screens/components/SideBar";
import { Button, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackViewEnum } from "./types";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const stackOptions = {
  headerShown: false,
}

export const Main: FC = () => {
    const { colorMode } = useColorMode();
  
  return (
    <RNTesterThemeContext.Provider value={colorMode === 'dark' ? themes.dark : themes.light}>
    
    <Stack.Navigator>
        <Stack.Screen name={StackViewEnum.Settings}
         component={SettingsScreen}
         options={stackOptions} />
        <Stack.Screen name={StackViewEnum.TrackOrder}
        component={TrackOrderScreen}
         options={stackOptions} />
      </Stack.Navigator>
      
      {/* <Layout>
      <Stack w="100%" h="100%" direction={{ base: "column", md: "row" }}>
      <Hidden from="sm" till="lg">
        <VStack
          space={{ base: "6", md: "4" }}
          flex={{ base: "none", md: 1 }}
          //   flex={{ base: "6", md: 1 }}
        //   p="4"
        //   bg="green.500"
        >
            <SideBar />
        </VStack>
        </Hidden>
        <Box flex={{ base: 1, md: 3 }} bg="blueGray.50">
        <ViewContainer flex={{ base: 1, md: 3 }} bg="blueGray.50">
            <SettingsScreen />
        </ViewContainer>
        </Box>
      </Stack>
    </Layout> */}

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