import { HStack, Switch, useColorMode } from "native-base";
import React, { FC, memo, useMemo } from "react";
import { Text } from "../../components/typography";
import { ViewContainer } from "../../components/view";


export const SideBar: FC = () => {
  return (
    <ViewContainer p="16">
    <ToggleDarkMode />
      <Text>Hello</Text>
    </ViewContainer>
  );
};

export default memo(SideBar);

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
