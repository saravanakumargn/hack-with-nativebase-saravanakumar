import React, { FC, memo, ReactElement, useMemo } from "react";
import {
  VStack,
  HStack,
  useColorMode,
  Avatar,
  Divider,
  ScrollView,
  Pressable,
  Flex,
  useColorModeValue,
  Box,
  Switch,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "../../components/icon";
import { ViewContainer } from "../../components/view";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackViewEnum } from "../../types";
import { BodyTypography } from "../../components/typography";
import { IconButton } from "../../components/button";
import { DarkTheme, LightTheme } from "../../theme/theme";
import { BORDER_RADIUS } from "../../utils";

type SidebarListItem = {
  label: string;
  iconName?: string;
  onPress?: () => void;
  icon?: ReactElement;
  isSelected?: boolean;
};

export const Sidebar: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <ViewContainer
      borderColor={useColorModeValue(LightTheme.SeparatorColor, DarkTheme.SeparatorColor)}
      borderRightWidth={0.5}
      borderTopWidth={0.5}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          flexGrow: 1,
        }}
      >
        <VStack
          px="1"
          pt="12"
          pb="8"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Avatar
            bg="purple.600"
            alignSelf="center"
            size="2xl"
            source={{
              uri: "https://i.pravatar.cc/150?img=13",
            }}
          >
            JD
          </Avatar>
          <HStack alignItems="center" mt={2}>
            <BodyTypography fontSize="md" fontWeight={"bold"}>
              Jane Doe
            </BodyTypography>
            <IconButton iconName="pencil" iconSize={"sm"} />
          </HStack>
          <BodyTypography isSecondaryText fontSize="sm">
            janedoe2@mydomain.com
          </BodyTypography>
        </VStack>
        <Divider />
        <Flex>
          <VStack px="6" py="8">
            <SidebarListItem label="Contacts" iconName="person" />
            <SidebarListItem label="Groups" iconName="groups" />
            <SidebarListItem
              label="My Cart (screen-5)"
              iconName="notifications"
              isSelected={route.name === StackViewEnum.MyCart}
              onPress={() => navigation.navigate(StackViewEnum.MyCart)}
            />
            <SidebarListItem
              label="Order (screen-3)"
              iconName="shopping-bag"
              isSelected={route.name === StackViewEnum.TrackOrder}
              onPress={() => navigation.navigate(StackViewEnum.TrackOrder)}
            />
            <SidebarListItem
              label="Settings (screen-1)"
              iconName="settings"
              isSelected={route.name === StackViewEnum.Settings}
              onPress={() => navigation.navigate(StackViewEnum.Settings)}
            />
            <SidebarListItem
              label="Portfolio (screen-4)"
              iconName="privacy-tip"
              isSelected={route.name === StackViewEnum.Portfolio}
              onPress={() => navigation.navigate(StackViewEnum.Portfolio)}
            />
            <SidebarListItem
              label="Help and Support"
              iconName="support-agent"
            />
            <SidebarListItem label="Refer and Earn" iconName="share" />
          </VStack>
          <VStack>
            <Divider />
            <VStack px="6" pt="8">
              <SidebarListItem label="Logout" iconName="logout" />
            </VStack>
          <Box pl="8" py="2">
            <ToggleDarkMode />
          </Box>
          </VStack>
        </Flex>
      </ScrollView>
    </ViewContainer>
  );
};

export default memo(Sidebar);

const SidebarListItem: FC<SidebarListItem> = memo(
  ({ icon, iconName, label, onPress, isSelected }) => {
    const {colorMode} = useColorMode();
    const bgColor = useMemo(() => {
      if (isSelected) {
        return useColorModeValue(LightTheme.SecondarySystemBackgroundColor, DarkTheme.SecondarySystemBackgroundColor);
      }
      return "transparent";
    }, [colorMode, isSelected]);

    const selectedColor = useMemo(() => {
      if (!isSelected) {
        return null;
      }
      return "violet.600";
    }, [isSelected]);

    return (
      <Pressable onPress={onPress}>
        <HStack bg={bgColor} p={4} borderRadius={BORDER_RADIUS}>
          {icon}
          {!!iconName && (
            <Icon name={iconName} color={selectedColor} as={MaterialIcons} />
          )}
          <BodyTypography pl={3} color={selectedColor}>
            {label}
          </BodyTypography>
        </HStack>
      </Pressable>
    );
  }
);


function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <BodyTypography fontSize={"sm"}>Dark</BodyTypography>
      <Switch isChecked={colorMode === "light"} onToggle={toggleColorMode} />
      <BodyTypography fontSize={"sm"}>Light</BodyTypography>
    </HStack>
  );
}

