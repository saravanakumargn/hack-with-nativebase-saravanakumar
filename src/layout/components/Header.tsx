import React, { FC, memo, useMemo } from "react";
import {
  VStack, HStack, Heading, IconButton, Text, NativeBaseProvider, Center, Box, StatusBar,
} from "native-base";
import { Icon } from "../../components/icon";
import { ViewContainer } from "../../components/view";

export const Header: FC = () => {
  return (
    <ViewContainer>
    <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon name="menu" />} />
          <Heading>
          <Text color="#6200ee">HackWith</Text>
          NativeBase
        </Heading>
        </HStack>
        <HStack>
          <IconButton icon={<Icon name="favorite" />} />
          <IconButton icon={<Icon name="emoji-happy" />} />
          <IconButton icon={<Icon name="more-vert" />} />
        </HStack>
      </HStack>
      </ViewContainer>
  );
};

export default memo(Header);
