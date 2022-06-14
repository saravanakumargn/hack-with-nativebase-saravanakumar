import React, { FC, memo, ReactNode, useContext, useMemo } from "react";
import { Box, Heading, HStack, IBoxProps } from "native-base";
import { RNTesterThemeContext } from "../../theme/theme";
import { BORDER_RADIUS } from "../../utils";
import { View } from "react-native";
import { Icon } from "../icon";
import { BodyTypography, Text } from "../typography";
import { IconButton } from "../button";

export interface GroupedViewProps extends IBoxProps {
  children: ReactNode;
  headerLabel?: string;
  headerIconName?: string;
  onClickHeader?: () => void;
  isSecondaryBackground?: boolean;
  isPadding?: boolean;
  isMargin?: boolean;
}

export const GroupedView: FC<GroupedViewProps> = ({
  children,
  headerLabel,
  headerIconName,
  onClickHeader,
  isSecondaryBackground = false,
  isPadding = true,
  isMargin = true,
  ...props
}) => {
  const theme = useContext(RNTesterThemeContext);

//   const backgroundColor = useMemo(() => (
//     isSecondaryBackground ? theme.SecondarySystemBackgroundColor : theme.SystemBackgroundColor
//   ), [isSecondaryBackground, theme]);

  return (
      <Box>
      {(!!headerIconName || !!headerLabel) && (
      <HStack alignItems="center" mx={4} mt={4}>
      {!!headerIconName && (
        <IconButton iconName={headerIconName}
        onPress={onClickHeader}/>
      )}
      {!!headerLabel && (
      <Heading size='md'>
          <Text>{headerLabel}</Text>
        </Heading>
      )}
      </HStack>
      )}
    <Box bg={theme.SystemBackgroundColor}
    p={isPadding ? 4 : 0}
    m={isMargin ? 4 : 0}
    borderRadius={BORDER_RADIUS}
     {...props}>
      {children}
    </Box>
    </Box>
  );
};

export default memo(GroupedView);
