import React, { FC, memo, useContext, useMemo } from "react";
import { ITextProps, Text as NBText } from "native-base";
import { AppThemeContext } from "../../theme/theme";

export interface TextProps extends ITextProps {
  children: string | JSX.Element;
  isSecondaryText?: boolean;
}

export const Text: FC<TextProps> = ({
  children,
  isSecondaryText = false,
  ...props
}) => {
  const theme = useContext(AppThemeContext);

  const textColor = useMemo(
    () => (isSecondaryText ? theme.SecondaryLabelColor : theme.LabelColor),
    [isSecondaryText, theme]
  );

  return (
    <NBText color={textColor} {...props}>
      {children}
    </NBText>
  );
};

export default memo(Text);
