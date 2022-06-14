import React, { FC, memo, useMemo } from "react";
import {Icon as NBIcon} from "native-base";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { IIconProps, ITextProps, Text } from "native-base";

/**
 *
 *```tsx
 *   import {Icon} from '../../components/icon';
 *
 *   <Icon name="menu" />
 * ```
 */
export const Icon: FC<IIconProps> = ({
  ...props
}) => {
  return (
    <NBIcon size="lg" as={Ionicons}
    {...props} />
  );
};

export default memo(Icon);
