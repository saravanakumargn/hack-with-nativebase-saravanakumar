import React, { FC, memo } from "react";
import {
  HStack,
  Heading,
  Text,
  Avatar,
} from "native-base";
import { ViewContainer } from "../../components/view";
import { IconButton } from "../../components/button";

export const Header: FC = () => {
  return (
    <ViewContainer flex={"none"}>
      <HStack px="3" py="3" justifyContent="space-between" alignItems="center">
        <HStack alignItems="center" mx={2}>
          <IconButton iconName="menu" />
          <Heading>
            <Text color="violet.800">HackWith</Text>
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
