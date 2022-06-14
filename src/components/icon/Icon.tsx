import React, { FC, memo, useContext, useMemo } from "react";
import {Icon as NBIcon} from "native-base";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { IIconProps, ITextProps, Text } from "native-base";
import { RNTesterThemeContext } from "../../theme/theme";

export const Icon: FC<IIconProps> = ({
  ...props
}) => {

  const theme = useContext(RNTesterThemeContext);

  return (
    <NBIcon size="lg" as={Ionicons}
    color={theme.LabelColor}
    {...props} />
  );
};

export default memo(Icon);
