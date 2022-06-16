import React, { FC, memo, ReactNode, useContext, useMemo } from "react";
import { Box, Heading, HStack, IBoxProps } from "native-base";
import { AppThemeContext } from "../../theme/theme";
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
  const theme = useContext(AppThemeContext);

  return (
      <>
      {(!!headerIconName || !!headerLabel) && (
      <HStack alignItems="center" 
      mx={[0, 8]}
       mt={8}>
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
    <Box bg={theme.GroupedBackgroundColor}
    p={isPadding ? 4 : 0}
    mx={[0, 8]}
    my={[0, 4]}
    borderRadius={[0, BORDER_RADIUS]}
     {...props}>
      {children}
    </Box>
    </>
  );
};

export default memo(GroupedView);
