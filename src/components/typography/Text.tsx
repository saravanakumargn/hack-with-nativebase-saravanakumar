import React, { FC, memo, useMemo } from "react";
import { ITextProps, Text as NBText, useColorMode, useColorModeValue } from "native-base";
import { DarkTheme, LightTheme } from "../../theme/theme";

export interface TextProps extends ITextProps {
  children: string | JSX.Element;
  isSecondaryText?: boolean;
}

export const Text: FC<TextProps> = ({
  children,
  isSecondaryText = false,
  ...props
}) => {
  const {colorMode} = useColorMode();
  const textColor = useMemo(
    () => (isSecondaryText 
      ? useColorModeValue(LightTheme.SecondaryLabelColor, DarkTheme.SecondaryLabelColor) 
      : useColorModeValue(LightTheme.LabelColor, DarkTheme.LabelColor)),
    [isSecondaryText, colorMode]
  );

  return (
    <NBText color={textColor} {...props}>
      {children}
    </NBText>
  );
};

export default memo(Text);
