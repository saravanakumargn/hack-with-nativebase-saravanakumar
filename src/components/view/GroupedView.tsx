import React, { FC, memo, ReactNode } from "react";
import {
  Box,
  Heading,
  HStack,
  IBoxProps,
  useColorModeValue,
  useMediaQuery,
} from "native-base";
import { DarkTheme, LightTheme } from "../../theme/theme";
import { BORDER_RADIUS } from "../../utils";
import { Text } from "../typography";
import { IconButton } from "../button";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../icon";

export interface GroupedViewProps extends IBoxProps {
  children: ReactNode;
  headerLabel?: string;
  headerIconName?: string;
  onClickHeader?: () => void;
  isSecondaryBackground?: boolean;
  isPadding?: boolean;
}

export const GroupedView: FC<GroupedViewProps> = ({
  children,
  headerLabel,
  headerIconName,
  onClickHeader,
  isSecondaryBackground = false,
  isPadding = true,
  ...props
}) => {
  const navigation = useNavigation();

  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });

  navigation.setOptions({
    title : headerLabel,
    headerShown : isSmallScreen,
    headerStyle: {
      backgroundColor: useColorModeValue("#5b21b6", DarkTheme.SystemBackgroundColor),
    },
    headerTintColor: '#FFFFFF',
    headerShadowVisible: false,
    headerLeft : () => {
      return (
        <Box ml={4}>
          <Icon name="arrow-back"
          onPress={() => navigation.goBack()}
          color={[
            "lightText",
            useColorModeValue(
              LightTheme.LabelColor,
              DarkTheme.LabelColor
            ),
          ]} />
        </Box>
      );
    }
  });

  return (
    <>
      {!isSmallScreen && (!!headerIconName || !!headerLabel) && (
        <HStack
          alignItems="center"
          bg={[
            useColorModeValue("violet.800", DarkTheme.SystemBackgroundColor),
            "transparent",
          ]}
          mx={[0, 8]}
          pt={8}
        >
          {!!headerIconName && (
            <IconButton
              iconName={headerIconName}
              _icon={{
                color: [
                  "lightText",
                  useColorModeValue(
                    LightTheme.LabelColor,
                    DarkTheme.LabelColor
                  ),
                ],
                size: "lg",
              }}
              onPress={onClickHeader}
            />
          )}
          {!!headerLabel && (
            <Heading size="md">
              <Text color={["lightText", "auto"]}>{headerLabel}</Text>
            </Heading>
          )}
        </HStack>
      )}
      <Box
        bg={useColorModeValue(LightTheme.GroupedBackgroundColor, DarkTheme.GroupedBackgroundColor)}
        p={isPadding ? 4 : 0}
        mx={[0, 8]}
        my={[0, 4]}
        borderRadius={[0, BORDER_RADIUS]}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default memo(GroupedView);
