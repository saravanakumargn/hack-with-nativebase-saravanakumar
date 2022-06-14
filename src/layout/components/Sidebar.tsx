import React, { FC, memo, useMemo } from "react";
import {
  VStack, HStack, Container, IconButton, Text, NativeBaseProvider, Center, Box, StatusBar,
} from "native-base";
import { MaterialIcons } from "@native-base/icons";
import { Icon } from "../../components/icon";

export interface SidebarProps {
  children: string | JSX.Element;
  isSecondaryText?: boolean;
}

/**
 *
 *```tsx
 *   import {Sidebar} from '../../components/typography';
 *
 *   <Sidebar>Sidebar</Sidebar>
 *   <Sidebar isSecondaryText>
 *     {test}
 *   </Sidebar>
 * ```
 */
export const Sidebar: FC<SidebarProps> = ({
  children,
  isSecondaryText = false,
  ...props
}) => {
  return (
    <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon name="menu" />} />
          <Text color="#6200ee" fontSize="20" fontWeight="bold">
            HackWith
          </Text>
          <Text fontSize="20" fontWeight="bold">
            NativeBase
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon name="favorite" />} />
          <IconButton icon={<Icon name="emoji-happy" />} />
          <IconButton icon={<Icon name="more-vert" />} />
        </HStack>
      </HStack>
  );
};

export default memo(Sidebar);
