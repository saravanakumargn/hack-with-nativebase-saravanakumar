import React, { FC } from "react";
import {useColorMode} from "native-base";
import { AppThemeContext, themes } from "./theme/theme";
import { SettingsScreen, TrackOrderScreen } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackViewEnum } from "./types";
import { MyCartScreen } from "./screens/MyCart.screen";

const Stack = createNativeStackNavigator();
const stackOptions = {
  headerShown: false,
};

export const Main: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <AppThemeContext.Provider
      value={colorMode === "dark" ? themes.dark : themes.light}>
      <Stack.Navigator initialRouteName={StackViewEnum.Settings}>
        <Stack.Screen
          name={StackViewEnum.Settings}
          component={SettingsScreen}
          options={stackOptions}
        />
        <Stack.Screen
          name={StackViewEnum.TrackOrder}
          component={TrackOrderScreen}
          options={stackOptions}
        />
        <Stack.Screen
          name={StackViewEnum.MyCart}
          component={MyCartScreen}
          options={stackOptions}
        />
      </Stack.Navigator>
    </AppThemeContext.Provider>
  );
};
