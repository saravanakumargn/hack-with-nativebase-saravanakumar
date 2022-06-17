import React, { FC, memo, ReactNode, useContext, useMemo } from "react";
import { Box, IBoxProps, useColorMode, useColorModeValue } from "native-base";
import { DarkTheme, LightTheme } from "../../theme/theme";

export interface ViewContainerProps extends IBoxProps {
  children: ReactNode;
  isSecondaryBackground?: boolean;
}

export const ViewContainer: FC<ViewContainerProps> = ({
  children,
  isSecondaryBackground = false,
  ...props
}) => {
  const {colorMode} = useColorMode();

  const backgroundColor = useMemo(
    () =>
      isSecondaryBackground
        ? useColorModeValue(LightTheme.SecondarySystemBackgroundColor, DarkTheme.SecondarySystemBackgroundColor)
        : useColorModeValue(LightTheme.SystemBackgroundColor, DarkTheme.SystemBackgroundColor),
    [isSecondaryBackground, colorMode]
  );

  return (
    <Box bg={backgroundColor} flex={1} {...props}>
      {children}
    </Box>
  );
};

export default memo(ViewContainer);
