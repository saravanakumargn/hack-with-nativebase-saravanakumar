import React, { FC, memo, useMemo } from "react";
import {IconButton as NBIconButton,IIconButtonProps, useColorMode, useColorModeValue} from "native-base";
import { Icon } from "../icon";
import { DarkTheme, LightTheme } from "../../theme/theme";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";

export interface IconButtonProps extends IIconButtonProps {
  iconName: string;
  isSecondaryIcon?: boolean;
  iconSize?: ThemeComponentSizeType<"Icon">;
}

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  isSecondaryIcon = false,
  iconSize = "lg",
  ...props
}) => {
  const {colorMode} = useColorMode();

  const iconColor = useMemo(
    () => (isSecondaryIcon 
      ? useColorModeValue(LightTheme.SecondaryLabelColor, DarkTheme.SecondaryLabelColor) 
      : useColorModeValue(LightTheme.LabelColor, DarkTheme.LabelColor)),
    [isSecondaryIcon, colorMode]
  );

  return (
    <NBIconButton
      icon={<Icon name={iconName} />}
      borderRadius="full"
      _icon={{
        color: iconColor,
        size: iconSize,
      }}
      {...props}
    />
  );
};

export default memo(IconButton);
