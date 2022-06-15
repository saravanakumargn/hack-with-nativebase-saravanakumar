import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, ScrollView } from "native-base";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";
import React, { FC, memo, ReactElement, useMemo } from "react";
import { Icon } from "../components/icon";
import { Text } from "../components/typography";
import { GroupedView, ViewContainer } from "../components/view";
import { Layout } from "../layout";

type SettingsItem = {
  label: string;
  iconName?: string;
  onPress?: () => void;
  icon?: ReactElement;
};

export const SettingsScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <ViewContainer isSecondaryBackground>
        <GroupedView
          headerLabel="Settings"
          headerIconName="arrow-back"
          onClickHeader={function () {
            navigation.goBack();
          }}
        >
          <SettingsItem
            label="Change Password"
            icon={
              <Icon
                name="lastpass"
                as={MaterialCommunityIcons}
                isSecondaryColor
              />
            }
          />
          <SettingsItem label="General"
            icon={
              <Icon
                name="shield"
                as={Foundation}
                isSecondaryColor
              />
            } />
          <SettingsItem label="Manage Accounts"
            icon={
              <Icon
                name="account-cog"
                as={MaterialCommunityIcons}
                isSecondaryColor
              />
            } />
          <HStack justifyContent="space-between" alignItems={"center"}>
            <SettingsItem label="Language" iconName="language" />
            <Text>English</Text>
          </HStack>
          <SettingsItem label="Linked Accounts" iconName="link-outline" />
          <SettingsItem label="Disable Accounts"
            icon={
              <Icon
                name="account-off"
                as={MaterialCommunityIcons}
                isSecondaryColor
              />
            }
          />
        </GroupedView>
      </ViewContainer>
    </Layout>
  );
};

const SettingsItem: FC<SettingsItem> = memo(
  ({ icon, iconName, label, onPress }) => {
    const navigation = useNavigation();
    return (
      <HStack onPress={onPress} my={4}>
        {icon}
        {!!iconName && <Icon name={iconName} isSecondaryColor />}
        <Text fontSize={"lg"} pl={3}>
          {label}
        </Text>
      </HStack>
    );
  }
);
