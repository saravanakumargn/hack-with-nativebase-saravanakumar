import React, { FC, memo, useMemo } from "react";
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
  useColorMode,
  Switch,
} from "native-base";
import { MaterialIcons } from "@native-base/icons";
import { Icon } from "../../components/icon";
import { ViewContainer } from "../../components/view";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackViewEnum } from "../../types";

export const Sidebar: FC = () => {
  const navigation = useNavigation();
  return (
    <ViewContainer p="16">
      <ToggleDarkMode />
      <Text>Hello</Text>
      <Button
        title="Go to TrackOrder"
        onPress={() => navigation.navigate(StackViewEnum.TrackOrder)}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate(StackViewEnum.Settings)}
      />
    </ViewContainer>
  );
};

export default memo(Sidebar);

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch isChecked={colorMode === "light"} onToggle={toggleColorMode} />
      <Text>Light</Text>
    </HStack>
  );
}
