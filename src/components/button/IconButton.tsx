import React, { FC, memo, useContext, useMemo } from "react";
import { Box, Heading, HStack, IBoxProps, IconButton as NBIconButton, IIconButtonProps } from "native-base";
import { Icon } from "../icon";
import { RNTesterThemeContext } from "../../theme/theme";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";

export interface IconButtonProps extends IIconButtonProps {
    iconName: string;
    isSecondaryIcon?: boolean;
    iconSize?: ThemeComponentSizeType<"Icon">
}

export const IconButton: FC<IconButtonProps> = ({
    iconName,
    isSecondaryIcon = false,
    iconSize="lg",
  ...props
}) => {
    const theme = useContext(RNTesterThemeContext);

  const iconColor = useMemo(() => (
    isSecondaryIcon ? theme.SecondaryLabelColor : theme.LabelColor
  ), [isSecondaryIcon, theme]);

  return (
    <NBIconButton icon={<Icon name={iconName} />}
        borderRadius="full"
        _icon={{
            color: iconColor,
            size: iconSize,
          }}
          {...props}/>
  );
};

export default memo(IconButton);
