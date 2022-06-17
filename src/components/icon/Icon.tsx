import React, { FC, memo, useMemo } from "react";
import { Icon as NBIcon, useColorMode, useColorModeValue } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { IIconProps } from "native-base";
import { DarkTheme, LightTheme } from "../../theme/theme";

export interface IconProps extends IIconProps {
  isSecondaryColor?: boolean;
}

export const Icon: FC<IconProps> = ({ isSecondaryColor, ...props }) => {
  const {colorMode} = useColorMode();

  const iconColor = useMemo(
    () => (isSecondaryColor 
      ? useColorModeValue(LightTheme.SecondaryLabelColor, DarkTheme.SecondaryLabelColor) 
      : useColorModeValue(LightTheme.LabelColor, DarkTheme.LabelColor)),
    [isSecondaryColor, colorMode]
  );

  return <NBIcon size="lg" as={Ionicons} color={iconColor} {...props} />;
};

export default memo(Icon);
