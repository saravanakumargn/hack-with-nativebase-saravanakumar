import React, { FC, memo, ReactNode, useContext, useMemo } from "react";
import { Box, IBoxProps } from "native-base";
import { RNTesterThemeContext } from "../../theme/theme";
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
  const theme = useContext(RNTesterThemeContext);

  const backgroundColor = useMemo(() => (
    isSecondaryBackground ? theme.SecondarySystemBackgroundColor : theme.SystemBackgroundColor
  ), [isSecondaryBackground, theme]);

  return (
    <Box bg={backgroundColor}    
    p={4}
    m={4}
    borderRadius={BORDER_RADIUS}
     {...props}>
      {children}
    </Box>
  );
};

export default memo(Card);
