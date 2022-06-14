import React, { FC, memo, useContext, useMemo } from "react";
import { ITextProps, Text as NBText } from "native-base";
import { RNTesterThemeContext } from "../../theme/theme";

export interface TextProps extends ITextProps {
  children: string | JSX.Element;
  isSecondaryText?: boolean;
}

/**
 *
 *```tsx
 *   import {Text} from '../../components/typography';
 *
 *   <Text>Text</Text>
 * ```
 */
export const Text: FC<TextProps> = ({
  children,
  isSecondaryText = false,
  ...props
}) => {
    const theme = useContext(RNTesterThemeContext);

    const textColor = useMemo(() => (
        isSecondaryText ? theme.SecondaryLabelColor : theme.LabelColor
    ), [isSecondaryText, theme]);
        

  return (
    <NBText color={textColor} {...props}>
      {children}
    </NBText>
  );
};

export default memo(Text);
