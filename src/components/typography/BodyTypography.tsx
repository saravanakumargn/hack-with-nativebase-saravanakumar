import React, { FC, memo, useMemo } from "react";
import Text, { TextProps } from "./Text";

export interface BodyTypographyProps extends TextProps {
  children: string | JSX.Element;
}

/**
 *
 *```tsx
 *   import {BodyTypography} from '../../components/typography';
 *
 *   <BodyTypography>BodyTypography</BodyTypography>
 *   <BodyTypography isSecondaryText>
 *     {test}
 *   </BodyTypography>
 * ```
 */
export const BodyTypography: FC<BodyTypographyProps> = ({
  children,
  ...props
}) => {
    // const textColor = useMemo(() => {
    //     if (!isSecondaryText) {
    //         return null;
    //     }
    //   return {
    //     fontSize : 'sm',
    //     _light: {
    //         color: 'gray.700',
    //     },
    //     _dark: {
    //         color: 'gray.400',
    //     },
    //   };
    // }, [isSecondaryText]);

  return (
    <Text fontSize={'md'}
     {...props}>
      {children}
    </Text>
  );
};

export default memo(BodyTypography);
