import React, { FC, memo, useMemo } from "react";
import {
  VStack, HStack, Heading, Text, NativeBaseProvider, Center, Box, StatusBar, Avatar,
} from "native-base";
import { Icon } from "../../components/icon";
import { ViewContainer } from "../../components/view";
import { IconButton } from "../../components/button";

export const Header: FC = () => {
  return (
    <ViewContainer flex={"none"}>
    <HStack px="3" py="3" justifyContent="space-between" alignItems="center">
        <HStack alignItems="center"
         mx={2}>
          <IconButton iconName="menu" />
          <Heading>
          <Text color="#6200ee">HackWith</Text>
          NativeBase
        </Heading>
        </HStack>
        <HStack mr={4}>
          <IconButton iconName="share" isSecondaryIcon />
          <IconButton iconName="heart" isSecondaryIcon />
          <IconButton iconName="cart" isSecondaryIcon />

          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="sm"
            source={{
              uri: "https://i.pravatar.cc/150?img=13",
            }}
          >
            JD
          </Avatar>
        </HStack>
      </HStack>
      </ViewContainer>
  );
};

export default memo(Header);
