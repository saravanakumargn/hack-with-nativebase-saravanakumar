import React, { FC } from 'react';
import { SettingsScreen, TrackOrderScreen } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackViewEnum } from './types';
import { MyCartScreen } from './screens/MyCart.screen';
import { PortfolioScreen } from './screens/Portfolio.screen';

const Stack = createNativeStackNavigator();
const stackOptions = {
  headerShown: false,
};

export const Main: FC = () => {
  return (
    <Stack.Navigator initialRouteName={StackViewEnum.Portfolio}>
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
      <Stack.Screen name={StackViewEnum.MyCart} component={MyCartScreen} options={stackOptions} />
      <Stack.Screen name={StackViewEnum.Portfolio} component={PortfolioScreen} options={stackOptions} />
    </Stack.Navigator>
  );
};
