import React, { FC, memo, ReactNode, useMemo } from "react";
import { Box, IBoxProps, useColorMode, useColorModeValue } from "native-base";
import { DarkTheme, LightTheme } from "../../theme/theme";
import { BORDER_RADIUS } from "../../utils";

export interface CardProps extends IBoxProps {
  children: ReactNode;
  isSecondaryBackground?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  isSecondaryBackground = false,
  ...props
}) => {
  const {colorMode} = useColorMode();
  const backgroundColor = useMemo(
    () => (isSecondaryBackground 
      ? useColorModeValue(LightTheme.SecondaryGroupedBackgroundColor, DarkTheme.SecondaryGroupedBackgroundColor) 
      : useColorModeValue(LightTheme.GroupedBackgroundColor, DarkTheme.GroupedBackgroundColor)),
    [isSecondaryBackground, colorMode]
  );

  return (
    <Box
      bg={backgroundColor}
      p={[2, 4]}
      borderRadius={BORDER_RADIUS}
      {...props}
    >
      {children}
    </Box>
  );
};

export default memo(Card);
