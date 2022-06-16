import React, { FC, memo, ReactNode, useContext, useMemo } from "react";
import { Box, IBoxProps } from "native-base";
import { AppThemeContext } from "../../theme/theme";

export interface ViewContainerProps extends IBoxProps {
  children: ReactNode;
  isSecondaryBackground?: boolean;
}

export const ViewContainer: FC<ViewContainerProps> = ({
  children,
  isSecondaryBackground = false,
  ...props
}) => {
  const theme = useContext(AppThemeContext);

  const backgroundColor = useMemo(
    () =>
      isSecondaryBackground
        ? theme.SecondarySystemBackgroundColor
        : theme.SystemBackgroundColor,
    [isSecondaryBackground, theme]
  );

  return (
    <Box bg={backgroundColor} flex={1} {...props}>
      {children}
    </Box>
  );
};

export default memo(ViewContainer);
