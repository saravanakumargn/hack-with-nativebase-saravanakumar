import React, { FC, memo, ReactElement, useContext, useMemo } from "react";
import {
  VStack,
  HStack,
  Container,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  useColorMode,
  Switch,
  Avatar,
  Divider,
  useTheme,
  ScrollView,
  Pressable,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "../../components/icon";
import { ViewContainer } from "../../components/view";
import { Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackViewEnum } from "../../types";
import { BodyTypography } from "../../components/typography";
import { IconButton } from "../../components/button";
import { RNTesterThemeContext } from "../../theme/theme";
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
  const theme = useContext(RNTesterThemeContext);
  console.log(route.name)
  return (
    <ViewContainer
      borderColor={theme.SeparatorColor}
      borderRightWidth={0.5}
      borderTopWidth={0.5}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
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
        <VStack px="6"
          py="8">
        <SidebarListItem label="Contacts" iconName="person" />
        <SidebarListItem label="Groups" iconName="groups"/>
        <SidebarListItem label="Notification" iconName="notifications" />
        <SidebarListItem label="Order" iconName="shopping-bag"
        isSelected={route.name === StackViewEnum.TrackOrder}
        onPress={() => navigation.navigate(StackViewEnum.TrackOrder)} />
        <SidebarListItem label="Settings" iconName="settings"
        isSelected={route.name === StackViewEnum.Settings}
        onPress={() => navigation.navigate(StackViewEnum.Settings)} />
        <SidebarListItem label="Privacy Policies" iconName="privacy-tip" />
        <SidebarListItem label="Help and Support" iconName="support-agent" />
        <SidebarListItem label="Refer and Earn" iconName="share" />
        </VStack>
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
      </ScrollView>
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

const SidebarListItem: FC<SidebarListItem> = memo(
  ({ icon, iconName, label, onPress, isSelected }) => {
    const {colors} = useTheme();
    const bgColor = useMemo(() => {
      if (isSelected) {
        return colors['primary'];
      }
      return "transparent";
    }
    , [isSelected]);

    const selectedColor = useMemo(() => {
      if (!isSelected) {
        return null;
      }
      return "white";
    }
    , [isSelected]);

    return (
      <Pressable onPress={onPress}>
      <HStack bg={bgColor} p={4}      
    borderRadius={BORDER_RADIUS}>
        {icon}
        {!!iconName && (
        <Icon name={iconName} color={selectedColor}        
        as={MaterialIcons} />
        )}
        <BodyTypography pl={3} color={selectedColor}>{label}</BodyTypography>
      </HStack>
      </Pressable>
    );
  }
);
