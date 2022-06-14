import React, { FC, memo, useContext, useMemo } from "react";
import { Box, Heading, HStack, IBoxProps, IconButton as NBIconButton, IIconButtonProps } from "native-base";
import { Icon } from "../icon";
import { RNTesterThemeContext } from "../../theme/theme";

export interface IconButtonProps extends IIconButtonProps {
    iconName: string;
}

export const IconButton: FC<IconButtonProps> = ({
    iconName,
  ...props
}) => {
    const theme = useContext(RNTesterThemeContext);
  return (
    <NBIconButton icon={<Icon name={iconName} />}
        borderRadius="full"
        _icon={{
            color: theme.LabelColor,
            size: "lg",
          }}
          {...props}/>
  );
};

export default memo(IconButton);
