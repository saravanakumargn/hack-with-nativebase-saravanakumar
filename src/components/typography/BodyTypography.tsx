import React, { FC, memo, useMemo } from "react";
import Text, { TextProps } from "./Text";

export interface BodyTypographyProps extends TextProps {
  children: string | JSX.Element;
}

export const BodyTypography: FC<BodyTypographyProps> = ({
  children,
  ...props
}) => {

  return (
    <Text fontSize={"lg"}
     {...props}>
      {children}
    </Text>
  );
};

export default memo(BodyTypography);
