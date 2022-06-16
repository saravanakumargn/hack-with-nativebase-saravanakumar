import React, { FC, memo, useContext, useMemo } from "react";
import {Icon as NBIcon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { IIconProps, ITextProps, Text } from "native-base";
import { AppThemeContext } from "../../theme/theme";

export interface IconProps extends IIconProps {
  isSecondaryColor?: boolean;
}

export const Icon: FC<IconProps> = ({
  isSecondaryColor,
  ...props
}) => {

  const theme = useContext(AppThemeContext);

  const iconColor = useMemo(() => (
      isSecondaryColor ? theme.SecondaryLabelColor : theme.LabelColor
  ), [isSecondaryColor, theme]);

  return (
    <NBIcon size="lg" as={Ionicons}
    color={iconColor}
    {...props} />
  );
};

export default memo(Icon);
